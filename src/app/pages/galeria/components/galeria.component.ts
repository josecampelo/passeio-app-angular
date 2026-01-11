import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LugarService } from '../../../core/services/lugar.service';
import { Lugar } from '../../../core/models/lugar'; 
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{
  private lugarService = inject(LugarService);

  public lugares: Lugar[] = [];
  public lugaresFiltrados: Lugar[] = [];
  public inputBusca = new FormControl('');

  public ngOnInit(): void {
      this.lugarService.listar().subscribe({
        next: (dados) => {
          this.lugares = dados;
          this.lugaresFiltrados = dados;
        },
        error: (err) => console.error('Erro ao carregar lugares:', err)
    });

    this.inputBusca.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(valor => {
        this.filtrarLugares(valor || '');
      });
  }

  public filtrarLugares(termo: string) {
    const busca = termo.toLowerCase();
    
    this.lugaresFiltrados = this.lugares.filter(lugar => 
      lugar.nome.toLowerCase().includes(busca) || 
      lugar.localizacao.toLowerCase().includes(busca)
    );
  }
}
