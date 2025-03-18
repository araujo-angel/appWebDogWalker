import { Component, OnInit } from '@angular/core';
import { Passeio } from '../../shared/modelo/passeio';
import { PasseioRestService } from '../../shared/services/passeio-rest.service';
import { ClienteRestService } from '../../shared/services/cliente-rest.service';
import { WalkerRestService } from '../../shared/services/walker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemIF } from "../../shared/modelo/MensagemIF";
import { Cliente } from '../../shared/modelo/cliente';
import { Walker } from '../../shared/modelo/walker';

@Component({
  selector: 'app-agendar-passeio',
  templateUrl: './agendar-passeio.component.html',
  styleUrl: './agendar-passeio.component.css',
  standalone: false
})
export class AgendarPasseioComponent implements OnInit {
  passeio: Passeio;
  nomeBotaoAcao: string;
  estahAgendando: boolean;
  clientes: Cliente[] = [];
  walkers: Walker[] = [];

  constructor(
    private passeioService: PasseioRestService,
    private clienteService: ClienteRestService,
    private walkerService: WalkerRestService,
    private mensagemService: MensagemIF,
    private roteador: Router,
    private rotaAtivada: ActivatedRoute
  ) {
    this.passeio = new Passeio();
    this.passeio.cliente = { ativo: true } as Cliente;
    this.passeio.walker = {} as Walker;  
    this.nomeBotaoAcao = 'Agendar';
    this.estahAgendando = true;
  }

  ngOnInit(): void {
    this.carregarClientes();
    this.carregarWalkers();

    const idEdicao = this.rotaAtivada.snapshot.params['id'];
    if (idEdicao) {
      this.nomeBotaoAcao = 'Atualizar';
      this.estahAgendando = false;
      this.passeioService.pesquisarPorId(idEdicao).subscribe(
        passeioPesquisado => this.passeio = passeioPesquisado
      );
    }
  }

  carregarClientes() {
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  carregarWalkers() {
    this.walkerService.listar().subscribe(walkers => {
      this.walkers = walkers;
    });
  }
  
  agendarOuAtualizarPasseio(): void {
    // Garantir que cliente e walker estejam com as propriedades corretas
    if (this.passeio.cliente && this.passeio.cliente.id) {
      this.passeio.cliente = {
        id: this.passeio.cliente.id,
        nome: this.passeio.cliente.nome,
        telefone: this.passeio.cliente.telefone,
        ativo: this.passeio.cliente.ativo || true  // Garantir que 'ativo' está presente
      } as Cliente;
    }

    if (this.passeio.walker && this.passeio.walker.id) {
      this.passeio.walker = {
        id: this.passeio.walker.id,
        nome: this.passeio.walker.nome,
        ativo: this.passeio.walker.ativo || true  // Garantir que 'ativo' está presente
      } as Walker;
    }

    // Agendar ou atualizar
    if (this.estahAgendando) {
      this.passeioService.agendar(this.passeio).subscribe(
        () => {
          this.passeio = new Passeio();  // Limpar o objeto passeio após o agendamento
          this.mensagemService.sucesso('Passeio agendado com sucesso!');
          this.roteador.navigate(['/passeios-agendados']);  // Navegar para a página de passeios agendados
        }
      );
    } else {
      this.passeioService.atualizar(this.passeio).subscribe(
        () => {
          this.passeio = new Passeio();  // Limpar o objeto passeio após a atualização
          this.mensagemService.sucesso('Passeio atualizado com sucesso!');
          this.roteador.navigate(['/passeios-agendados']);  // Navegar para a página de passeios agendados
        }
      );
    }
  }
}
