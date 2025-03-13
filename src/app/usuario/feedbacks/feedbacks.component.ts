import { Component } from '@angular/core';
import { Feedback } from '../../shared/modelo/feedback';
import { FEEDBACKS } from '../../shared/modelo/FEEDBACKS';
import { FeedbacksFireService } from '../../shared/services/feedbacks-fire.service';
import { FeedbackServiceIF } from '../../shared/services/feedback-serviceIF';
import {ActivatedRoute, Router} from "@angular/router";
import { MensagemSweetService } from "../../shared/services/mensagem-sweet.service";
import { MensagemIF } from '../../shared/modelo/MensagemIF';
import { Route } from '@angular/router';



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

  constructor(private feedbackService: FeedbackServiceIF,  private mensagemService: MensagemIF, private roteador: Router, private rotaAtivada: ActivatedRoute) {
    this.nomeBotaoAcao = 'Cadastrar';
    this.estahCadastrando = true;
    this.feedback = new Feedback();

  }

  onDateChange(event: any) {
    this.feedback.data = event.value.toISOString();
  }

  cadastrar() {
    // Assegurando que o campo 'nota' não seja undefined
    if (this.feedback.nota === undefined) {
      this.feedback.nota = ''; // Defina um valor padrão caso necessário
    }

    this.feedbackService.cadastrar(this.feedback).subscribe(() => {
        this.feedback = new Feedback();
        this.mensagemService.sucesso('Feedback cadastrado com sucesso!');
    });
  }
}
