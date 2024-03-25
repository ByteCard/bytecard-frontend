import { Component, OnInit } from '@angular/core';
import { Cartao } from '../../interfaces/cartao';
import { Router, ActivatedRoute } from '@angular/router';
import { CompraService } from 'src/app/componentes/service/compra.service';
import { Compra } from '../../interfaces/compra';

@Component({
  selector: 'app-ver-fatura',
  templateUrl: './ver-fatura.component.html',
  styleUrls: ['./ver-fatura.component.css']
})
export class VerFaturaComponent implements OnInit {

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

  dataPesquisa = "";
  listaCompras: Compra[] = [];
  valorTotal: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private compraService: CompraService
  ) { }

  ngOnInit(): void {
    this.cartao = history.state.cartao;
    this.obterValorTotalFatura();
  }

  obterValorTotalFatura() {
    this.compraService.obterValorTotalFatura(this.dataPesquisa, this.cartao.numberCard).subscribe((valorTotal: number) => {
      this.valorTotal = valorTotal;
    });
  }

  visualizarFatura() {
    this.compraService.visualizarFatura(this.dataPesquisa, this.cartao.numberCard).subscribe((data: any) => {
      this.listaCompras = data.faturaDados;
    });
  }

  voltar() {
    this.router.navigate(['/listagemdecartoes']);
  }
}
