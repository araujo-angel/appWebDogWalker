import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../shared/modelo/cliente';
import {CLIENTES} from '../../shared/modelo/CLIENTES';
import { ClienteRestService } from '../../shared/services/cliente-rest.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-listagem',
  standalone: false,
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent {
  CLIENTES: Cliente[] = [];

  constructor(private clienteService: ClienteRestService, private roteador: Router) {
  }

  gOnInit() {
    this.clienteService.listar().subscribe(
        cliente => this.CLIENTES = cliente
    );
  }
  remover(clienteARemover: Cliente) {
    if (clienteARemover.cpf) {
      this.clienteService.remover(clienteARemover.cpf).subscribe(
          () => {
            console.log('removido');
            const clienteIndx = this.CLIENTES.findIndex(cliente => cliente.cpf === clienteARemover.cpf);
            this.CLIENTES.splice(clienteIndx, 1);
          }
      );
    }
  }
}
