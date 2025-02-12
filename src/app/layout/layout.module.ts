import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import { AgendarPasseioComponent } from '../usuario/agendar-passeio/agendar-passeio.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],

  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule,  
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuTrigger,
    MatMenuModule,
    RouterLink
  ]
})
export class LayoutModule { }
