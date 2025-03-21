import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { ListagemCadastroComponent } from './listagem-cadastro/listagem-cadastro.component';
import { Feedback } from '../shared/modelo/feedback';

import {FormsModule} from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AgendarPasseioComponent } from './agendar-passeio/agendar-passeio.component';
import { ListagemPasseiosComponent } from './listagem-passeios/listagem-passeios.component';
import { CadastroWalkerComponent } from './cadastro-walker/cadastro-walker.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {FirestoreModule} from "../firestore/firestore.module";


@NgModule({
  declarations: [
    ListagemComponent,
    ManutencaoComponent,
    ListagemCadastroComponent,
    AgendarPasseioComponent,
    ListagemPasseiosComponent,
    CadastroWalkerComponent,
    FeedbacksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  exports:[
    ListagemComponent,
    ManutencaoComponent,
    FeedbacksComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsuarioModule { }
