import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from './components/galeria.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GaleriaModule { }
