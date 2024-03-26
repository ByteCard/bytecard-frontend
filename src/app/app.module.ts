import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListarClientesComponent } from './componentes/cliente/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './componentes/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { ClienteComponent } from './componentes/cliente/cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditarClienteComponent } from './componentes/cliente/editar-cliente/editar-cliente.component';
import { ExcluirClienteComponent } from './componentes/cliente/excluir-cliente/excluir-cliente.component';
import { ListagemCartoesComponent } from './componentes/cartoes/listagem-cartoes/listagem-cartoes.component';
import { CartoesComponent } from './componentes/cartoes/cartoes/cartoes.component';
import { CadastrarCartaoComponent } from './componentes/cartoes/cadastrar-cartao/cadastrar-cartao.component';
import { AlterarLimiteComponent } from './componentes/cartoes/alterar-limite/alterar-limite.component';
import { VerFaturaComponent } from './componentes/cartoes/ver-fatura/ver-fatura.component';
import { ComprasComponent } from './componentes/compras/compras/compras.component';
import { RelatoriosGastosCategoriaComponent } from './componentes/compras/relatorios-gastos-categoria/relatorios-gastos-categoria.component';
import { CadastrarCompraComponent } from './componentes/compras/cadastrar-compra/cadastrar-compra.component';
import { RelatoriosComponent } from './componentes/relatorios/relatorios/relatorios.component';
import { FaturaComponent } from './componentes/cartoes/fatura/fatura.component';
import { RelatorioCategoriaComponent } from './componentes/compras/relatorio-categoria/relatorio-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListarClientesComponent,
    CadastrarClienteComponent,
    ClienteComponent,
    ListarClientesComponent,
    EditarClienteComponent,
    ExcluirClienteComponent,
    ListagemCartoesComponent,
    CartoesComponent,
    CadastrarCartaoComponent,
    AlterarLimiteComponent,
    VerFaturaComponent,
    ComprasComponent,
    RelatoriosGastosCategoriaComponent,
    CadastrarCompraComponent,
    RelatoriosComponent,
    FaturaComponent,
    RelatorioCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
