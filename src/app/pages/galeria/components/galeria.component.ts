import { Component, OnInit, inject } from '@angular/core';
import { LugarService } from '../../../core/services/lugar.service';
import { Lugar } from '../../../core/models/lugar'; 

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{
  private lugarService = inject(LugarService);

  public lugares: Lugar[] = [];

  ngOnInit(): void {
      this.lugarService.listar().subscribe({
        next: (dados) => this.lugares = dados,
        error: (err) => console.error('Erro ao carregar lugares:', err)
    });
  }
}
