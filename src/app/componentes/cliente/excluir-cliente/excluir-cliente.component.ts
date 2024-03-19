import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../interfaces/cliente';
import { clienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.css']
})
export class ExcluirClienteComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    cpf: '',
    name: '',
    email: '',
    telephone: ''
  };

  constructor(
      private route: ActivatedRoute,
      private service: clienteService,
      private router: Router
    ) { }

  ngOnInit(): void {
    // Obter os dados do cliente da rota
    this.cliente = history.state.cliente;
    // Implementação Alura
    // const cpf =  this.route.snapshot.paramMap.get('cpf')
    // this.service.buscarPorCpf(String(cpf)).subscribe((cliente) => {
    //   this.cliente = cliente
    // })
  }

  excluirCliente(): void {
    this.service.excluir(this.cliente.cpf).subscribe()
    alert(`Cliente ${this.cliente.name} deletado com sucesso!`)
    this.router.navigate(['/listarclientes'])
  }

  cancelarExclusao(): void {
    this.router.navigate(['/listarclientes'])
  }
}
