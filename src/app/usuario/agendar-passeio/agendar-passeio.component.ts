import { Component } from '@angular/core';
import { Passeio } from '../../shared/modelo/passeio';
import { PasseioRestService } from '../../shared/services/passeio-rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MensagemIF} from "../../shared/modelo/MensagemIF";

@Component({
    selector: 'app-agendar-passeio',
    templateUrl: './agendar-passeio.component.html',
    styleUrl: './agendar-passeio.component.css',
    standalone: false
})
export class AgendarPasseioComponent {
  passeio: Passeio;
  nomeBotaoAcao: string;
  estahAgendando: boolean;

  constructor(
    private passeioService: PasseioRestService,
    private mensagemService: MensagemIF,
    private roteador: Router,
    private rotaAtivada: ActivatedRoute
  ) {
    this.passeio = new Passeio();
    this.nomeBotaoAcao = 'agendar';
    this.estahAgendando = true;

    const idEdicao = this.rotaAtivada.snapshot.params['id'];
    if (idEdicao) {
      this.nomeBotaoAcao = 'Atualizar';
      this.estahAgendando = false;
      this.passeioService.pesquisarPorId(idEdicao).subscribe(
        passeioPesquisado => this.passeio = passeioPesquisado
      );
    }

  }
  agendarOuAtualizarPasseio() {
    if (this.estahAgendando) {
      this.passeioService.agendar(this.passeio).subscribe(
        passeioAgendado => {
          this.passeio = new Passeio();
          this.mensagemService.sucesso('Passeio agendado com sucesso!');
          this.roteador.navigate(['/passeios-agendados']);
        }
      );
    } else {
      this.passeioService.atualizar(this.passeio).subscribe(
        passeioAtualizado => {
          this.passeio = new Passeio();
          this.mensagemService.sucesso('Passeio atualizado com sucesso!');
          this.roteador.navigate(['/passeios-agendados']);
        }
      );
    }
  }
}
