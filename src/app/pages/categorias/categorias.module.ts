import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaFormComponent } from './components/categoria-form/categoria-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriaFormComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
