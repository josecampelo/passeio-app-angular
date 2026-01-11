import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lugar } from '../models/lugar';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:3000/lugares';

  listar(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(this.API);
  }

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(this.API, lugar);
  }
}
