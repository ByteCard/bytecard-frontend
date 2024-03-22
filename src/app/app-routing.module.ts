import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './componentes/cliente/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './componentes/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './componentes/cliente/editar-cliente/editar-cliente.component';
import { ExcluirClienteComponent } from './componentes/cliente/excluir-cliente/excluir-cliente.component';
import { ListagemCartoesComponent } from './componentes/cartoes/listagem-cartoes/listagem-cartoes.component';
import { CadastrarCartaoComponent } from './componentes/cartoes/cadastrar-cartao/cadastrar-cartao.component';
import { VerFaturaComponent } from './componentes/cartoes/ver-fatura/ver-fatura.component';
import { AlterarLimiteComponent } from './componentes/cartoes/alterar-limite/alterar-limite.component';


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
  {
    path: 'listagemdecartoes',
    component: ListagemCartoesComponent
  },
  {
    path: 'cadastrarcartao',
    component: CadastrarCartaoComponent
  },
  {
    path: 'verfatura',
    component: VerFaturaComponent
  },
  {
    path: 'alterarlimite',
    component: AlterarLimiteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
