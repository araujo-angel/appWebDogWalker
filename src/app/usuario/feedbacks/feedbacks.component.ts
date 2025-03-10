import { Component } from '@angular/core';
import { Feedback } from '../../shared/modelo/feedback';
import { FEEDBACKS } from '../../shared/modelo/FEEDBACKS';
import { FeedbacksFireService } from '../../shared/services/feedbacks-fire.service';
import { FeedbackServiceIF } from '../../shared/services/feedback-serviceIF';
import {ActivatedRoute, Router} from "@angular/router";
import { MensagemSweetService } from "../../shared/services/mensagem-sweet.service";


@Component({
  selector: 'app-feedbacks',
  standalone: false,

  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
  feedback: Feedback;
  nomeBotaoAcao: string;
  estahCadastrando: boolean;
  private mensagemService: MensagemSweetService;

  constructor(private FeedbackService: FeedbackServiceIF,   private roteador: Router, private rotaAtivada: ActivatedRoute) {
    this.nomeBotaoAcao = 'Cadastrar';
    this.estahCadastrando = true;
    this.feedback = new Feedback();

  }

  cadastrar() {
      this.FeedbackService.cadastrar(this.feedback).subscribe(() => {
          this.feedback = new Feedback();
          this.mensagemService.sucesso('Feedback cadastrado com sucesso!');
          this.roteador.navigate(['/listagem-feedbacks']); 
        }
      );
    }
}
