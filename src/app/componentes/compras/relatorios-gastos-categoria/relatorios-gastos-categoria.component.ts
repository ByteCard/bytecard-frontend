import { Cliente } from './../../interfaces/cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartaoService } from '../../service/cartao.service';
import { CompraService } from '../../service/compra.service';
import { Relatorio } from '../../interfaces/relatorio';

@Component({
  selector: 'app-relatorios-gastos-categoria',
  templateUrl: './relatorios-gastos-categoria.component.html',
  styleUrls: ['./relatorios-gastos-categoria.component.css']
})
export class RelatoriosGastosCategoriaComponent implements OnInit {

  listaRelatorios: Relatorio[] = [];
  numerosCartoes: [number, string][] = [];
  numeroCartao: [number, string] | null = null;
  date = "";
  valorTotal = 0;

  constructor(
    private router: Router,
    private cartaoService: CartaoService,
    private compraService: CompraService
  ) { }

  ngOnInit(): void {
    this.listarNumerosCartoes();
  }

  voltar() {
    this.router.navigate(['/compras']);
  }

  private listarNumerosCartoes() {
    this.cartaoService.listar().subscribe(
      response => {
        const cartoesMap = new Map<number, string>();
        response.forEach(cartao => {
          cartoesMap.set(cartao.numberCard, cartao.name);
        });
        this.numerosCartoes = Array.from(cartoesMap.entries());
      },
      error => {
        console.error('Erro ao listar números de cartões:', error);
      }
    );
  }

  gerarRelatorio() {
    if (!this.numeroCartao) {
      console.error('Nenhum cartão selecionado');
      return;
    }

    const cardNumber = this.numeroCartao[0]; // Obtendo o número do cartão selecionado
    this.compraService.relatorioCategoria(cardNumber, this.date).subscribe((relatorios: Relatorio[]) => {
      this.listaRelatorios = relatorios;
    });

    this.compraService.relatorioCategoriaTotal(cardNumber, this.date).subscribe((number) => {
      this.valorTotal = number;
    });
  }

}
