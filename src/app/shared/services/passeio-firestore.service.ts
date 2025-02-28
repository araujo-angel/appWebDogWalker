import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import { Passeio } from '../modelo/passeio';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasseioFirestoreService {

  colecaoPasseios: AngularFirestoreCollection<Passeio>;
  NOME_COLECAO = 'passeios';

  constructor(private afs: AngularFirestore) { 
    this.colecaoPasseios = afs.collection(this.NOME_COLECAO);
  }
}
