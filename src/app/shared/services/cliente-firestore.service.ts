import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import { Cliente } from '../modelo/cliente';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteFirestoreService {

  colecaoClientes: AngularFirestoreCollection<Cliente>;
  private NOME_COLECAO = 'clientes';

  constructor(private firestore: AngularFirestore) {
    this.colecaoClientes = this.firestore.collection<Cliente>(this.NOME_COLECAO);
  }

  atualizar(cliente: Cliente): Promise<void> {
    return this.colecaoClientes.doc(cliente.cpf).update(cliente);
  }
  cadastrar(cliente: Cliente): Promise<void> {
  return this.colecaoClientes.doc(cliente.cpf).set(cliente);
  }
  
  listar(): Observable<Cliente[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoClientes.valueChanges({idField: 'id'});
  }

  inserir(cliente: Cliente): Observable<object> {
    // removendo id pois ele está undefined, já que um novo usuário
    //delete usuario.id;
    // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoClientes.add(Object.assign({}, cliente)));
  }
 
  apagar(id: string): Observable<void> {
    return from(this.colecaoClientes.doc(id).delete());
  }

  pesquisarPorCpf(cpf: string): Observable<Cliente | undefined> {
    return this.colecaoClientes.doc<Cliente>(cpf).valueChanges();
  }
  
}
