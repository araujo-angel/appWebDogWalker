import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { LayoutModule } from "./layout/layout.module";
import {UsuarioModule} from "./usuario/usuario.module";
import {FirestoreModule} from "./firestore/firestore.module";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from "@angular/common/http";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FeedbackServiceIF } from './shared/services/feedback-serviceIF';
import { FeedbacksFireService } from './shared/services/feedbacks-fire.service';
import { MensagemIF } from './shared/modelo/MensagemIF';
import { MensagemSweetService } from './shared/services/mensagem-sweet.service';
import { ErroInterceptor } from './interceptor/erro-interceptor';
import { PasseioServiceIF } from './shared/services/passeio-serviceIF';
import { PasseioRestService } from './shared/services/passeio-rest.service';
import { WalkerRestService } from './shared/services/walker.service';
import { ClienteRestService } from './shared/services/cliente-rest.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    UsuarioModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    FirestoreModule,
],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErroInterceptor,
        multi: true
    },
    {
    provide: FeedbackServiceIF,
    useClass: FeedbacksFireService
    },
    {
      provide: PasseioServiceIF,
      useClass: PasseioRestService
    },
    {
      provide: WalkerRestService,
      useClass: WalkerRestService
    },
    {
      provide: ClienteRestService,
      useClass: ClienteRestService
    },
    {
      provide: MensagemIF,
      useClass: MensagemSweetService
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
