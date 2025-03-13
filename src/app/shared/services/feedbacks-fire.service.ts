import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from "@angular/fire/compat/firestore";
import { Feedback } from '../modelo/feedback';
import {from, map, Observable, switchMap} from "rxjs";
import { FeedbackServiceIF } from './feedback-serviceIF';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksFireService implements FeedbackServiceIF {

  private injetor = inject(Injector);
  private colecaoFeedbacks: AngularFirestoreCollection<Feedback>;
  NOME_COLECAO = 'feedbacks';

  constructor(private firestore: AngularFirestore) {
    this.colecaoFeedbacks = this.firestore.collection(this.NOME_COLECAO);
    runInInjectionContext(this.injetor, () => {this.colecaoFeedbacks = this.firestore.collection(this.NOME_COLECAO);

    });
   }
   
  cadastrar(feedback: Feedback): Observable<Feedback>{
    delete feedback.id;
        return from(this.colecaoFeedbacks.add({...feedback})).pipe(
            switchMap((docRef: DocumentReference<Feedback>) => docRef.get()),
            map(doc => ({id: doc.id, ...doc.data()} as Feedback))
        );
  }

  listar(): Observable<Feedback[]>{
    return runInInjectionContext(this.injetor, () => {
      return this.colecaoFeedbacks.valueChanges({idField: 'clienteEmail'});
  });
  }

  remover(id: string): Observable<any>{
    return runInInjectionContext(this.injetor, () => {
      return from(this.colecaoFeedbacks.doc(id).delete());
  });
  }

  atualizar(feedback: Feedback): Observable<any>{
    return runInInjectionContext(this.injetor, () => {
      return from(this.colecaoFeedbacks.doc(feedback.id).update({...feedback}));
  });
  }
}
