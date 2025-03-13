import { Component } from '@angular/core';
import { Passeio } from '../../shared/modelo/passeio';
import { PasseioRestService } from '../../shared/services/passeio-rest.service';
import { Router } from '@angular/router';
import { MensagemSweetService } from '../../shared/services/mensagem-sweet.service';

@Component({
    selector: 'app-agendar-passeio',
    templateUrl: './agendar-passeio.component.html',
    styleUrl: './agendar-passeio.component.css',
    standalone: false
})
export class AgendarPasseioComponent {
  passeio: Passeio;

  constructor(
    private passeioService: PasseioRestService,
    private mensagemService: MensagemSweetService,
    private roteador: Router
  ) {
    this.passeio = new Passeio();
  }

  agendarPasseio() {
    this.passeioService.agendar(this.passeio).subscribe(() => {
      this.passeio = new Passeio();
      this.mensagemService.sucesso('Passeio agendado com sucesso!');
      this.roteador.navigate(['/passeios-agendados']);
    });
  }
}
