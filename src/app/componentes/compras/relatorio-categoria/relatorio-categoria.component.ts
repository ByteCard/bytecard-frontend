import { Component, Input, OnInit } from '@angular/core';
import { Relatorio } from '../../interfaces/relatorio';

@Component({
  selector: 'app-relatorio-categoria',
  templateUrl: './relatorio-categoria.component.html',
  styleUrls: ['./relatorio-categoria.component.css']
})
export class RelatorioCategoriaComponent implements OnInit {

  @Input() relatorio: Relatorio = {
    total: 0,
    categoria: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
