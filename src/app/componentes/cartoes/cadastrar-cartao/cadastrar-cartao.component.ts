import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartaoService } from '../../service/cartao.service';
import { Cartao } from '../../interfaces/cartao';

@Component({
  selector: 'app-cadastrar-cartao',
  templateUrl: './cadastrar-cartao.component.html',
  styleUrls: ['./cadastrar-cartao.component.css']
})
export class CadastrarCartaoComponent implements OnInit {

  clientesComCartao: Cartao[] = [];
  cpf: string = '';
  limite: number = 0;
  limiteInvalido: boolean = false;
  clienteSelecionado: boolean = false;

  constructor(
    private router: Router,
    private service: CartaoService
  ) { }

  ngOnInit(): void {
    this.listarClientesComCartao();
  }

  cadastrarCartao() {
    if (!this.cpf) {
      alert("Selecione um cliente antes de cadastrar.");
      return;
    }

    if (this.limite > 0 && !this.limiteInvalido) {
      this.service.cadastrar(this.cpf, this.limite).subscribe()
      alert('Cartão cadastrado com sucesso!')
      this.router.navigate(['/listagemdecartoes']);
    } else {
      alert("O limite não pode conter letras, vírgula ou ser menor ou igual a zero.");
    }
  }

  cancelarCadastro() {
    this.router.navigate(['/listagemdecartoes']);
  }

  private listarClientesComCartao() {
    this.service.listar().subscribe(
      response => {
        const clientesSet = new Set<string>(); // Usar um conjunto para armazenar os CPFs únicos
        this.clientesComCartao = response.filter(cartao => {
          if (!clientesSet.has(cartao.cpf)) {
            clientesSet.add(cartao.cpf);
            return true; // Adicionar o cliente à lista e ao conjunto
          }
          return false; // Ignorar o cliente se já estiver na lista
        });
      },
      error => {
        console.error('Erro ao listar clientes com cartão:', error);
      }
    );
  }

  aoAlterarLimite() {
    // Verificar se o limite é um número inteiro
    if (isNaN(this.limite) || this.limite <= 0 || this.limite % 1 !== 0) {
      this.limiteInvalido = true;
    } else {
      this.limiteInvalido = false;
    }
  }

  onSelectCliente(cpf: string) {
    this.cpf = cpf;
  }
}
