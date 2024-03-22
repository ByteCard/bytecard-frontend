import { Router } from '@angular/router';
import { Cartao } from './../../interfaces/cartao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponent implements OnInit {

  cartao: Cartao = {
    id: 0,
	  numberCard: 0,
	  cpf: '',
    name: '',
	  date: '',
	  limit: 0,
	  status: true,
	  idCliente: 0
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  alterarLimite() {
    this.router.navigate(['/alterarlimite'], { state: { cartao: this.cartao }});
  }

  verFatura() {
    this.router.navigate(['/verfatura'], { state: { cartao: this.cartao }});
  }

  ativarDesativarCartao() {

  }

}
