import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../interfaces/cliente';
import { clienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = {
    cpf: '',
    name: '',
    email: '',
    telephone: ''
  }

  clienteDadosAnteriores: Cliente = {
    cpf: '',
    name: '',
    email: '',
    telephone: ''
  }

  emailInvalido: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: clienteService
  ) {}

  ngOnInit(): void {
    this.cliente = history.state.cliente;
    this.clienteDadosAnteriores = history.state.cliente;
    const cpf = this.clienteDadosAnteriores.cpf
    this.service.buscarPorCpf(String(cpf)).subscribe((cliente) => (
      this.clienteDadosAnteriores = cliente
    ))
  }

  atualizarCliente() {
    if (this.validarFormulario()) {
      if (this.cliente.cpf !== this.clienteDadosAnteriores.cpf) {
        this.validarCpfExistente();
      } else {
        this.executarEdicao();
      }
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
        if (cliente && cliente.cpf !== this.clienteDadosAnteriores.cpf) {
          alert(`Cliente com CPF ${this.cliente.cpf} já existe no banco de dados.`);
        } else {
          this.executarEdicao();
        }
      },
      (error) => {
        console.error('Erro ao pesquisar cliente por CPF:', error);
      }
    );
  }

  executarEdicao() {
    this.service.editar(this.clienteDadosAnteriores.cpf, this.cliente).subscribe()
    alert(`Cliente ${this.cliente.name} alterado com sucesso!`);
    this.router.navigate(['/listarclientes']);
  }

  cancelarEdicao() {
    this.router.navigate(['/listarclientes']);
  }
}
