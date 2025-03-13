import { Feedback } from "../modelo/feedback";
import { Observable } from "rxjs";

export abstract class FeedbackServiceIF {

    abstract cadastrar(feedback: Feedback): Observable<Feedback>;

    abstract listar(): Observable<Feedback[]>;

    abstract remover(id: string): Observable<any>;

    abstract atualizar(feedback: Feedback): Observable<any>;

}