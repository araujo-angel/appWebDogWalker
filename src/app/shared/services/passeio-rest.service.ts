import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passeio } from '../modelo/passeio';

@Injectable({ providedIn: 'root' })
export class PasseioRestService {
  private URL_PASSEIOS = 'http://localhost:3000/passeios';

  constructor(private http: HttpClient) {}

  agendar(passeio: Passeio): Observable<Passeio> {
    return this.http.post<Passeio>(this.URL_PASSEIOS, passeio);
  }

  listar(): Observable<Passeio[]> {
    return this.http.get<Passeio[]>(this.URL_PASSEIOS);
  }

  remover(id: string): Observable<any> {
    return this.http.delete(`${this.URL_PASSEIOS}/${id}`);
  }
}
