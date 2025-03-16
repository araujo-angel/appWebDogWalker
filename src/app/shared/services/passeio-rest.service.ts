import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passeio } from '../modelo/passeio';
import { environment } from '../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class PasseioRestService {
  private URL_PASSEIOS =  environment.URL_PASSEIOS;

  constructor(private http: HttpClient) {}

  agendar(passeio: Passeio): Observable<Passeio> {
    return this.http.post<Passeio>(this.URL_PASSEIOS, passeio);
  }

  listar(): Observable<Passeio[]> {
    return this.http.get<Passeio[]>(this.URL_PASSEIOS);
  }

  listarPorCliente(idCliente: string): Observable<Passeio[]> {
    return this.http.get<Passeio[]>(`${this.URL_PASSEIOS}/cliente/${idCliente}`);
  }

  listarPorWalker(idDogWalker: string): Observable<Passeio[]> {
    return this.http.get<Passeio[]>(`${this.URL_PASSEIOS}/dogwalker/${idDogWalker}`);
  }
  
  remover(id: string): Observable<any> {
    return this.http.delete(`${this.URL_PASSEIOS}/${id}`);
  }
}
