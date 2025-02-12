import { Component, OnInit } from '@angular/core';
import { Passeio } from '../../shared/modelo/passeio';
import { PasseioRestService } from '../../shared/services/passeio-rest.service';


@Component({
  selector: 'app-listagem-passeios',
  templateUrl: './listagem-passeios.component.html',
  styleUrls: ['./listagem-passeios.component.css']
})
export class ListagemPasseiosComponent implements OnInit {
  passeios: Passeio[] = [];
  displayedColumns: string[] = ['nomeCliente', 'nomePet', 'dataHora', 'idDogWalker'];  // Defina as colunas

  constructor(private passeioService: PasseioRestService) {}

  ngOnInit() {
    this.listarPasseios();
  }

  listarPasseios() {
    this.passeioService.listar().subscribe({
      next: (dados: Passeio[]) => {
        this.passeios = dados;
      },
      error: (erro: any) => {
        console.error('Erro ao listar passeios', erro);
      }
    });
  }
}
