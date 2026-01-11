import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugarFormComponent } from './components/lugar-form/lugar-form.component';

const routes: Routes = [
  {
    path: '',
    component: LugarFormComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LugaresRoutingModule { }
