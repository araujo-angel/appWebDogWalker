import { Injectable } from '@angular/core';
import { Walker } from '../modelo/walker';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WalkerFirestoreService {
  colecaoWalkers: AngularFirestoreCollection<Walker>;
    private NOME_COLECAO = 'walkers';
  
  constructor(private firestore: AngularFirestore) {
      this.colecaoWalkers = this.firestore.collection<Walker>(this.NOME_COLECAO);
  }

  cadastrar(walker: Walker): Observable<void> {
    return from(this.colecaoWalkers.doc(walker.cpf).set(walker));
  }

 atualizar(walker: Walker): Promise<void> {
    return this.colecaoWalkers.doc(walker.cpf).update(walker);
  }

 listar(): Observable<Walker[]> {
  // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoWalkers.valueChanges({idField: 'cpf'});
  }
 apagar(id: string): Observable<void> {
    return from(this.colecaoWalkers.doc(id).delete());
  }
 
 pesquisarPorCpf(cpf: string): Observable<Walker | undefined> {
    return this.colecaoWalkers.doc<Walker>(cpf).valueChanges();
  }
}
