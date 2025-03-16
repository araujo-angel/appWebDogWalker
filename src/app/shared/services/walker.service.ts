import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Walker } from '../modelo/walker'; 

@Injectable({
  providedIn: 'root'
})
export class WalkerRestService {

  private URL_WALKERS = 'http://localhost:3000/walkers';

  constructor(private http: HttpClient) { }

  // Cadastrar um novo walker
  cadastrar(walker: Walker): Observable<Walker> {
    return this.http.post<Walker>(this.URL_WALKERS, walker);
  }

  // Listar todos os walkers
  listar(): Observable<Walker[]> {
    return this.http.get<Walker[]>(this.URL_WALKERS);
  }

  // Remover um walker pelo CPF ou ID
  remover(id: string): Observable<any> {
    return this.http.delete(`${this.URL_WALKERS}/${id}`);
  }

  // Pesquisar um walker por ID ou CPF (supondo que seja CPF ou ID)
  pesquisarPorId(id: string): Observable<Walker> {
    return this.http.get<Walker>(`${this.URL_WALKERS}/${id}`);
  }

}
