import { Component, Input, OnInit } from '@angular/core';
import { Relatorio } from '../../interfaces/relatorio';

@Component({
  selector: 'app-compras-maior-valor',
  templateUrl: './compras-maior-valor.component.html',
  styleUrls: ['./compras-maior-valor.component.css']
})
export class ComprasMaiorValorComponent implements OnInit {

  @Input() cliente: Relatorio = {
    nome: "",
    valor: 0,
    cpf: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
