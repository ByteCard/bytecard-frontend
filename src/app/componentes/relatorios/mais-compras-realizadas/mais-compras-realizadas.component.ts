import { Relatorio } from '../../interfaces/relatorio';
import { Cliente } from './../../interfaces/cliente';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mais-compras-realizadas',
  templateUrl: './mais-compras-realizadas.component.html',
  styleUrls: ['./mais-compras-realizadas.component.css']
})
export class MaisComprasRealizadasComponent implements OnInit {

  @Input() cliente: Relatorio = {
    nome: "",
    cpf: "",
    quantidade: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
