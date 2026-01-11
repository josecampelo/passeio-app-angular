import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing.module';
import { LugarFormComponent } from './components/lugar-form/lugar-form.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    LugarFormComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    ReactiveFormsModule
  ]
})
export class LugaresModule { }
