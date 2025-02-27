import { Component } from '@angular/core';
import { Cliente } from '../../shared/modelo/cliente';
import { CLIENTES } from '../../shared/modelo/CLIENTES';
import { ClienteRestService } from '../../shared/services/cliente-rest.service';
import {MensagemSnackService} from "../../shared/services/mensagem-snack.service";
import {MensagemSweetService} from "../../shared/services/mensagem-sweet.service";
import {ActivatedRoute, Router} from "@angular/router";
import { ClienteFirestoreService } from '../../shared/services/cliente-firestore.service';



@Component({
  selector: 'app-manutencao',
  standalone: false,
  templateUrl: './manutencao.component.html',
  styleUrl: './manutencao.component.css'
})
export class ManutencaoComponent {

  cliente: Cliente;
  nomeBotaoAcao: string;
  estahCadastrando: boolean;

  constructor(private clienteFirestotreService: ClienteFirestoreService, 
    private mensagemService: MensagemSweetService,
    private roteador: Router, 
    private rotaAtivada: ActivatedRoute) {

    this.nomeBotaoAcao = 'Cadastrar';
    this.estahCadastrando = true;
    this.cliente = new Cliente();

    const cpfEdicao = this.rotaAtivada.snapshot.params['cpf'];
    if (cpfEdicao) {
      this.nomeBotaoAcao = 'Atualizar';
      this.estahCadastrando = false;
      this.clienteFirestotreService.pesquisarPorCpf(cpfEdicao).subscribe(
        clientePesquisado => {
          if (clientePesquisado) {
            this.cliente = clientePesquisado;
          } else {
            this.mensagemService.erro('Cliente não encontrado!');
          }
        }
      );
    }
  }

  cadastrarOuAtualizar() {
    if (this.estahCadastrando) {
      this.clienteFirestotreService.cadastrar(this.cliente).then(() => {
            this.cliente = new Cliente();
            this.mensagemService.sucesso('Cliente cadastrado com sucesso!');}
      );
    } else {
      this.clienteFirestotreService.atualizar(this.cliente).then(() => {
          this.mensagemService.sucesso('Cliente atualizado com sucesso!');
      });
    }
  }
}

