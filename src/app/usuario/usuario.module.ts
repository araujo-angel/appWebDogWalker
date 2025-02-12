import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { ListagemCadastroComponent } from './listagem-cadastro/listagem-cadastro.component';

import {FormsModule} from "@angular/forms";
import { MatTableModule } from '@angular/material/table';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import { AgendarPasseioComponent } from './agendar-passeio/agendar-passeio.component';
import { ListagemPasseiosComponent } from './listagem-passeios/listagem-passeios.component';


@NgModule({
  declarations: [
    ListagemComponent,
    ManutencaoComponent,
    ListagemCadastroComponent,
    AgendarPasseioComponent,
    ListagemPasseiosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatBadgeModule,
  ],
  exports:[
    ListagemComponent,
    ManutencaoComponent
  ]
})
export class UsuarioModule { }
