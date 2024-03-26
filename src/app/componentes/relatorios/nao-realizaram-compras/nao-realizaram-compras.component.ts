import { Component, Input, OnInit } from '@angular/core';
import { Relatorio } from '../../interfaces/relatorio';

@Component({
  selector: 'app-nao-realizaram-compras',
  templateUrl: './nao-realizaram-compras.component.html',
  styleUrls: ['./nao-realizaram-compras.component.css']
})
export class NaoRealizaramComprasComponent implements OnInit {

  @Input() cliente: Relatorio = {
    nome: "",
    cpf: "",
    numeroCartao: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
