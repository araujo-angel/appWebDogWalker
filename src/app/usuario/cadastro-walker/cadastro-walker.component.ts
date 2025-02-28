import { Component } from '@angular/core';
import { Walker } from '../../shared/modelo/walker';
import { WalkerRestService } from '../../shared/services/walker.service';
import { MensagemSweetService } from "../../shared/services/mensagem-sweet.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro-walker',
  templateUrl: './cadastro-walker.component.html',
  styleUrls: ['./cadastro-walker.component.css']
})
export class CadastroWalkerComponent {

  walker: Walker;
  nomeBotaoAcao: string;
  estahCadastrando: boolean;

  constructor(
    private walkerService: WalkerRestService,
    private mensagemService: MensagemSweetService,
    private roteador: Router
  ) {
    // Inicializa o estado do formulário
    this.nomeBotaoAcao = 'Cadastrar';
    this.estahCadastrando = true;
    this.walker = new Walker();
  }

  cadastrar() {
    this.walkerService.cadastrar(this.walker).subscribe(() => {
        this.walker = new Walker();
        this.mensagemService.sucesso('Walker cadastrado com sucesso!');
        this.roteador.navigate(['/listagem-walkers']); // Navega para a listagem de walkers
      }
    );
  }
}