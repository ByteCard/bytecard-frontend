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

  // Essa variavel recebe os dados anteriores do cliente para ser usado o seu cpf para ir na url,
  // pois a variavel cliente depende do ngmodel e o cliente alterar o cpf vai dar erro
  clienteDadosAnteriores: Cliente = {
    cpf: '',
    name: '',
    email: '',
    telephone: ''
  }

  // *faz parte validação inputs
  emailInvalido: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: clienteService
    ) {}

  ngOnInit(): void {
    // Obter os dados do cliente da rota
    this.cliente = history.state.cliente;
    this.clienteDadosAnteriores = history.state.cliente;
    // Os dados anteriores puxam corretamente os dados Antigos do cliente no back end para
    // poder pasar o cpf antigo na url e atualizar o cliente caso o cpf dele foi atualizado
    const cpf = this.clienteDadosAnteriores.cpf
    this.service.buscarPorCpf(String(cpf)).subscribe((cliente) => (
      this.clienteDadosAnteriores = cliente
    ))
  }

  // *faz parte validação inputs
  atualizarCliente() {
    if (this.validarFormulario()) {
      this.service.editar(this.clienteDadosAnteriores.cpf, this.cliente).subscribe()
      alert(`Cliente ${this.cliente.name} alterado com sucesso!`)
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

  cancelarEdicao() {
    this.router.navigate(['/listarclientes'])
  }
}
