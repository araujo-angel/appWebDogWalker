import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./usuario/listagem/listagem.component";
import {ManutencaoComponent} from "./usuario/manutencao/manutencao.component";
import {ListagemCadastroComponent} from "./usuario/listagem-cadastro/listagem-cadastro.component";

const routes: Routes = [
  {
    path: 'listagem-clientes',
    component: ListagemComponent
  },
  {
    path: 'cadastro-clientes',
    component: ManutencaoComponent
  },
  {
    path: 'edicao-clientes/:cpf',
    component: ManutencaoComponent
  },
  {
    path: 'listagem-cadastro-clientes',
    component: ListagemCadastroComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
