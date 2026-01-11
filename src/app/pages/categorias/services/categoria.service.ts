import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private http = inject(HttpClient);

  private readonly API = 'http://localhost:3000/categorias';

  listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.API);
  }

  salvar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.API, categoria);
  }
}
