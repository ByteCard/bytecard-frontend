import { Router } from '@angular/router';
import { Cartao } from './../../interfaces/cartao';
import { Component, Input, OnInit } from '@angular/core';
import { CartaoService } from '../../service/cartao.service';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponent implements OnInit {

  @Input() cartao: Cartao = {
    id: 0,
    numberCard: 0,
    cpf: '',
    name: '',
    date: '',
    limit: 0,
    status: true,
    idCliente: 0
  }

  constructor(
    private router: Router,
    private cartaoService: CartaoService
    ) { }

  ngOnInit(): void {
  }

  alterarLimite() {
    this.router.navigate(['/alterarlimite'], { state: { cartao: this.cartao }});
  }

  verFatura() {
    this.router.navigate(['/verfatura'], { state: { cartao: this.cartao }});
  }

  ativarDesativarCartao() {
    if (this.cartao.status == true) {
      this.cartaoService.desativarCartao(this.cartao.numberCard).subscribe(
        (response) => {
          this.cartao.status = false;
        },
        (error) => {
          console.error('Erro ao desativar cartão:', error);
        }
      );
    } else {
      this.cartaoService.ativarCartao(this.cartao.numberCard).subscribe(
        (response) => {
          this.cartao.status = true;
        },
        (error) => {
          console.error('Erro ao ativar cartão:', error);
        }
      );
    }
  }

}
