import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { EstadoIBGE } from '../models/estado-ibge';

@Injectable({
  providedIn: 'root'
})
export class EstadosIBGEService {
  private http = inject(HttpClient);
  private readonly API_IBGE = 'https://brasilapi.com.br/api/ibge/uf/v1';
  private cacheEstados$?: Observable<EstadoIBGE[]>;

  public listar(): Observable<EstadoIBGE[]> {
    if (!this.cacheEstados$) {
        this.cacheEstados$ = this.http.get<EstadoIBGE[]>(this.API_IBGE).pipe(shareReplay(1));
    }

    return this.cacheEstados$;
  }
}