import { Component, Input, OnInit } from '@angular/core';
import { Compra } from '../../interfaces/compra';

@Component({
  selector: 'app-fatura',
  templateUrl: './fatura.component.html',
  styleUrls: ['./fatura.component.css']
})
export class FaturaComponent implements OnInit {

  @Input() compra: Compra = {
    numberCard: 0,
    cpf: "",
    date: "",
    estabelecimento: "",
    categoriaCompra: "",
    valor: 0,
    name: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
