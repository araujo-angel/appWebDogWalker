import { Component } from '@angular/core';
import { Cliente } from '../../shared/modelo/cliente';
import { CLIENTES } from '../../shared/modelo/CLIENTES';
import { ClienteRestService } from '../../shared/services/cliente-rest.service';
import {MensagemSnackService} from "../../shared/services/mensagem-snack.service";
import {MensagemSweetService} from "../../shared/services/mensagem-sweet.service";
import {ActivatedRoute, Router} from "@angular/router";



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

  constructor(private clienteService: ClienteRestService, 
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
      this.clienteService.pesquisarPorCpf(cpfEdicao).subscribe(
        clientePesquisado => this.cliente = clientePesquisado
      );
    }
  }

  cadastrarOuAtualizar() {
    if (this.estahCadastrando) {
      this.clienteService.cadastrar(this.cliente).subscribe(
          clienteCadastrado => {
            this.mensagemService.sucesso('Cliente cadastrado com sucesso!');
            this.roteador.navigate(['/listagem-clientes']);
          }
      );
    } else {
      this.clienteService.atualizar(this.cliente).subscribe(
          clienteAtualizado => {
            this.mensagemService.sucesso('Cliente atualizado com sucesso!');
            this.roteador.navigate(['/listagem-clientes']);
          }
      );
    }
  }

}

