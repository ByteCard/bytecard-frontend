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

  // *faz parte validação inputs
  emailInvalido: boolean = false;

  constructor(
    private service: clienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // *faz parte validação inputs
  cadastrarCliente() {
    if (this.validarFormulario()) {
      this.service.cadastrar(this.cliente).subscribe()
      alert(`Cliente ${this.cliente.name} cadastrado com sucesso!`)
      this.router.navigate(['/listarclientes'])
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }

  // *faz parte validação inputs
  validarFormulario(): boolean {
    return this.validarCPF(this.cliente.cpf) &&
           this.validarNome(this.cliente.name) &&
           !this.emailInvalido &&
           this.validarTelefone(this.cliente.telephone);
  }


  // *faz parte validação inputs
  validarNome(nome: string): boolean {
    // Verifica se o nome tem pelo menos 4 caracteres
    return nome.length >= 4;
  }

  // *faz parte validação inputs
  validarEmail(email: string) {
    // Verifica se o email possui o formato correto
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailInvalido = !regex.test(email);
  }

  // *faz parte validação inputs
  validarCPF(cpf: string): boolean {
    const regex = /^[0-9]{11}$/; // Deve conter 11 dígitos numéricos
    return regex.test(cpf);
  }

  // *faz parte validação inputs
  validarTelefone(telefone: string): boolean {
    const regex = /^\d{10,11}$/; // Deve conter entre 10 e 11 dígitos numéricos
    return regex.test(telefone);
  }

  cancelarCadastro() {
    this.router.navigate(['/listarclientes']);
  }
}
