import { Relatorio } from './../../interfaces/relatorio';
import { CompraService } from 'src/app/componentes/service/compra.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  listaComprasMaiorValor: Relatorio[] = [];
  listaNaoComprou: Relatorio[] = [];
  listaComprouMais: Relatorio[] = [];
  date = "";

  constructor(
    private router: Router,
    private CompraService: CompraService
  ) { }

  ngOnInit(): void {
  }

  visualizarRelatorio() {
    this.CompraService.relatorioGeralCompraMaiorValor(this.date).subscribe((relatorio: any) => {
      this.listaComprasMaiorValor =  relatorio
    });
    this.CompraService.relatorioGeralComprouMais(this.date).subscribe((relatorio: any) => {
      this.listaComprouMais =  relatorio
    });
    this.CompraService.relatorioGeralComprouNada(this.date).subscribe((relatorio: any) => {
      this.listaNaoComprou =  relatorio
    });
  }

}
