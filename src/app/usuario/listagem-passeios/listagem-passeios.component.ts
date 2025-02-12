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
  displayedColumns: string[] = ['id','nomeCliente', 'nomePet', 'dataHora', 'idDogWalker']; 

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
  removerPasseio(id: string | undefined) {
  if (id) {
    this.passeioService.remover(id).subscribe({
      next: () => {
        // Atualiza a lista após a remoção
        this.listarPasseios();
      },
      error: (erro) => {
        console.error('Erro ao remover passeio', erro);
      }
    });
  } else {
    console.error('ID não encontrado para remover o passeio.');
  }
}
}
