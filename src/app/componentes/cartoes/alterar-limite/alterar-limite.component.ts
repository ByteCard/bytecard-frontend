import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartao } from './../../interfaces/cartao';
import { CartaoService } from '../../service/cartao.service';

@Component({
  selector: 'app-alterar-limite',
  templateUrl: './alterar-limite.component.html',
  styleUrls: ['./alterar-limite.component.css']
})
export class AlterarLimiteComponent implements OnInit {

  cartao: Cartao = {
    id: 0,
    numberCard: 0,
    cpf: '',
    name: '',
    date: '',
    limit: 0,
    status: true,
    idCliente: 0
  };

  novoLimite: number | undefined; // Alterado para aceitar undefined

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartaoService: CartaoService
  ) { }

  ngOnInit(): void {
    this.cartao = history.state.cartao;
    this.novoLimite = this.cartao.limit; // Preenche o novo limite com o valor atual do cartão
  }

  alterarLimite() {
    if (this.novoLimite !== undefined && !isNaN(this.novoLimite) && this.novoLimite > 0) {
      this.cartaoService.alterarlimite(this.cartao.numberCard, this.novoLimite).subscribe(
        (cartao: Cartao) => {
          console.log("Limite alterado com sucesso:", cartao);
          // Você pode fazer qualquer manipulação adicional aqui, se necessário
          this.router.navigate(['/listagemdecartoes']);
        },
        error => {
          console.error("Erro ao alterar limite:", error);
          // Manipulação de erro, se necessário
        }
      );
    } else {
      alert("O limite não pode conter letras, vírgula ou ser menor ou igual a zero.");
    }
  }

  cancelarAlteracao() {
    this.router.navigate(['/listagemdecartoes']);
  }
}
