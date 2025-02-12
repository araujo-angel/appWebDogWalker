import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Cliente } from '../modelo/cliente';

@Injectable({  providedIn: 'root'})
export class ClienteRestService {
  private URL_CLIENTES = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) { }

  cadastrar(cliente: Cliente): Observable<Cliente> {    
    return this.http.post<Cliente>(this.URL_CLIENTES, cliente); 
   }

  listar(): Observable<Cliente[]> {   
    return this.http.get<Cliente[]>(this.URL_CLIENTES); 
  }
  remover(cpf: string): Observable<any> {   
    return this.http.delete(`${this.URL_CLIENTES}/${cpf}`); 
  }
  pesquisarPorCpf(cpfEdicao: string): Observable<Cliente> {  
    return this.http.get<Cliente>(`${this.URL_CLIENTES}/${cpfEdicao}`);  
  }
  atualizar(cliente: Cliente): Observable<Cliente> {   
    return this.http.put<Cliente>(`${this.URL_CLIENTES}/${cliente.cpf}`, cliente);  
  }
}