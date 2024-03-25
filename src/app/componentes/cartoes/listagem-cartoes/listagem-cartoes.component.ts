import { Component, OnInit } from '@angular/core';
import { Cartao } from '../../interfaces/cartao';
import { CartaoService } from '../../service/cartao.service';

@Component({
  selector: 'app-listagem-cartoes',
  templateUrl: './listagem-cartoes.component.html',
  styleUrls: ['./listagem-cartoes.component.css']
})
export class ListagemCartoesComponent implements OnInit {

  listaCartoes: Cartao[] = [];

  constructor(
    private service: CartaoService
    ) { }

  ngOnInit(): void {
    this.listarCartoes();
  }

  listarCartoes() {
    this.service.listar().subscribe((listaCartoes: Cartao[]) => {
      this.listaCartoes = listaCartoes;
    });
  }

}
