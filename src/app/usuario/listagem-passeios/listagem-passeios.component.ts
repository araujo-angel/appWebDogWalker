import { Component, OnInit } from '@angular/core';
import { Passeio } from '../../shared/modelo/passeio';
import {Router} from "@angular/router";
import { PasseioRestService } from '../../shared/services/passeio-rest.service';
import {MensagemIF} from "../../shared/modelo/MensagemIF";

@Component({
    selector: 'app-listagem-passeios',
    templateUrl: './listagem-passeios.component.html',
    styleUrls: ['./listagem-passeios.component.css'],
    standalone: false
})
export class ListagemPasseiosComponent implements OnInit {
  PASSEIOS: Passeio[] = [];
  displayedColumns: string[] = ['id','idCliente', 'nomePet', 'dataHora', 'idDogWalker']; 

  constructor(private passeioService: PasseioRestService, private roteador: Router, private mensagemService: MensagemIF) {}

  ngOnInit() {
    this.passeioService.listar().subscribe((passeios: any) => this.PASSEIOS = passeios);
}
  listarPasseios() {
    this.passeioService.listar().subscribe({
      next: (dados: Passeio[]) => {
        this.PASSEIOS = dados;
      },
      error: (erro: any) => {
        console.error('Erro ao listar passeios', erro);
      }
    });
  }
  alterar(passeio: Passeio) {
    this.roteador.navigate([`edicao-passeio`, passeio.id]);
  }
  removerPasseio(passeioARemover: Passeio) {
    if (passeioARemover.id) {
      this.passeioService.remover(passeioARemover.id).subscribe({
        next: () => {
          // Removendo o passeio da lista local
          const passeioIndx = this.PASSEIOS.findIndex(passeio => passeio.id === passeioARemover.id);
          if (passeioIndx !== -1) {
            this.PASSEIOS.splice(passeioIndx, 1);
            this.mensagemService.sucesso('Passeio removido com sucesso!');
          }
        },
        error: (erro) => {
          console.error('Erro ao remover passeio', erro);
          this.mensagemService.erro('Erro ao remover passeio.');
        }
      });
    }
  }
}


