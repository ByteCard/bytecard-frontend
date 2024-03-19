import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { clienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clienteCpfPesquisa: string = '';
  listaClientes: Cliente[] = [];
  cpfInvalido: boolean = false; // Variável para controlar se o CPF digitado é inválido

  constructor(private service: clienteService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    if (this.clienteCpfPesquisa.trim() === '') {
      this.service.listar().subscribe((listaClientes: Cliente[]) => {
        this.listaClientes = listaClientes;
      });
    } else {
      this.pesquisarClientePorCpf(this.clienteCpfPesquisa);
    }
  }

  pesquisarClientePorCpf(cpf: string): void {
    // Validar o CPF antes de realizar a pesquisa
    if (!this.validarCPF(cpf)) {
      this.cpfInvalido = true;
      return; // Não realiza a pesquisa se o CPF for inválido
    }

    this.cpfInvalido = false; // Reinicia a variável para ocultar a mensagem de CPF inválido

    this.service.buscarPorCpf(cpf).subscribe(
      (cliente: Cliente) => {
        this.listaClientes = cliente ? [cliente] : [];
      },
      (error) => {
        console.error('Erro ao pesquisar cliente por CPF:', error);
      }
    );
  }

  pesquisaClienteCpf(): void {
    this.listarClientes();
  }

  // Método para validar o CPF
  validarCPF(cpf: string): boolean {
    const regex = /^[0-9]{11}$/; // Deve conter 11 dígitos numéricos
    return regex.test(cpf);
  }
}
