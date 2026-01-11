import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing.module';
import { LugarFormComponent } from './components/lugar-form/lugar-form.component';


@NgModule({
  declarations: [
    LugarFormComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule
  ]
})
export class LugaresModule { }
