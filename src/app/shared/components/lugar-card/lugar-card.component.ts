import { Component, Input } from '@angular/core';
import { Lugar } from '../../../core/models/lugar';

@Component({
  selector: 'app-lugar-card',
  standalone: false,
  templateUrl: './lugar-card.component.html',
  styleUrl: './lugar-card.component.scss'
})
export class LugarCardComponent {
  @Input() lugar!: Lugar;
}
