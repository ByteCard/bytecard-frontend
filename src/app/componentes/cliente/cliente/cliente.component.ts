import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() cliente: Cliente = {
    id: 0,
    cpf: '',
    name: '',
    email: '',
    telephone: ''
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  alterarCliente() {
    this.router.navigate(['/editarcliente', this.cliente.id], { state: { cliente: this.cliente }});
  }

  excluirCliente() {
    this.router.navigate(['/excluircliente', this.cliente.id], { state: { cliente: this.cliente }});
  }

}
