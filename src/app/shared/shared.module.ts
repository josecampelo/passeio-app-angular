import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarCardComponent } from './components/lugar-card/lugar-card.component';

@NgModule({
  declarations: [
    LugarCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LugarCardComponent
  ]
})
export class SharedModule { }