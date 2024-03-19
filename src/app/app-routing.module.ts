import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './componentes/cliente/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './componentes/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './componentes/cliente/editar-cliente/editar-cliente.component';
import { ExcluirClienteComponent } from './componentes/cliente/excluir-cliente/excluir-cliente.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarclientes',
    pathMatch: 'full'
  },
  {
    path: 'listarclientes',
    component: ListarClientesComponent
  },
  {
    path: 'cadastrarcliente',
    component: CadastrarClienteComponent
  },
  {
    path: 'editarcliente/:cpf',
    component: EditarClienteComponent
  },
  {
    path: 'excluircliente/:cpf',
    component: ExcluirClienteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
