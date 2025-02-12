import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./usuario/listagem/listagem.component";
import {ManutencaoComponent} from "./usuario/manutencao/manutencao.component";
import {ListagemCadastroComponent} from "./usuario/listagem-cadastro/listagem-cadastro.component";
import { AgendarPasseioComponent } from './usuario/agendar-passeio/agendar-passeio.component';
import { ListagemPasseiosComponent } from './usuario/listagem-passeios/listagem-passeios.component';
import { HomeComponent } from './layout/home/home.component';
import { CadastroWalkerComponent } from './usuario/cadastro-walker/cadastro-walker.component';

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
  {
    path: 'agendar-passeio',
    component: AgendarPasseioComponent
  },
  {
    path: 'passeios-agendados',
    component: ListagemPasseiosComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cadastro-walker',
    component: CadastroWalkerComponent
  },
  {
    path: '',
    redirectTo: '/home', 
    pathMatch: 'full' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
