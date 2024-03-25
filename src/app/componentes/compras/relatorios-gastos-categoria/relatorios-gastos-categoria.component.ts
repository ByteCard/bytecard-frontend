import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorios-gastos-categoria',
  templateUrl: './relatorios-gastos-categoria.component.html',
  styleUrls: ['./relatorios-gastos-categoria.component.css']
})
export class RelatoriosGastosCategoriaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['/compras']);
  }

}
