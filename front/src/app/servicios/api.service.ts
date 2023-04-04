import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contacto } from '../interfaces/contacto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ApiService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }

  agregarContacto(mensaje:Contacto): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(mensaje);
    console.log(body)
    return this.http.post(this.baseURL + 'contacto', body,{'headers':headers})
  }
  listarCategorias(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.get(this.baseURL + 'categorias', {'headers':headers})
  }
}
