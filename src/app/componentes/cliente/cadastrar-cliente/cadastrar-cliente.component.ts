import { Cliente } from '../../interfaces/cliente';
import { Component, OnInit } from '@angular/core';
import { clienteService } from '../../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  cliente: Cliente = {
    cpf: '',
    name: '',
    email: '',
    telephone: ''
  }

  emailInvalido: boolean = false;

  constructor(
    private service: clienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarCliente() {
    if (this.validarFormulario()) {
      this.validarCpfExistente();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }

  validarFormulario(): boolean {
    return this.validarCPF(this.cliente.cpf) &&
           this.validarNome(this.cliente.name) &&
           !this.emailInvalido &&
           this.validarTelefone(this.cliente.telephone);
  }

  validarNome(nome: string): boolean {
    return nome.length >= 4;
  }

  validarEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailInvalido = !regex.test(email);
  }

  validarCPF(cpf: string): boolean {
    const regex = /^[0-9]{11}$/;
    return regex.test(cpf);
  }

  validarTelefone(telefone: string): boolean {
    const regex = /^\d{10,11}$/;
    return regex.test(telefone);
  }

  validarCpfExistente() {
    this.service.buscarPorCpf(this.cliente.cpf).subscribe(
      (cliente: Cliente) => {
        if (cliente) {
          alert(`Cliente com CPF ${this.cliente.cpf} já existe no banco de dados.`);
        } else {
          this.service.cadastrar(this.cliente).subscribe()
          alert(`Cliente ${this.cliente.name} cadastrado com sucesso!`);
          this.router.navigate(['/listarclientes']);
        }
      },
      (error) => {
        console.error('Erro ao pesquisar cliente por CPF:', error);
      }
    );
  }

  cancelarCadastro() {
    this.router.navigate(['/listarclientes']);
  }
}
