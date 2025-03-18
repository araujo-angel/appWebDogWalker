import { Passeio } from "../modelo/passeio";
import {Observable} from "rxjs";

export abstract class PasseioServiceIF {

    abstract salvar(aluno: Passeio): Observable<Passeio>;

    abstract listar(): Observable<Passeio[]>;

    abstract remover(id: string): Observable<any>;

    abstract pesquisarPorId(idEdicao: string): Observable<Passeio>;

    abstract atualizar(passeio: Passeio): Observable<any>;

}