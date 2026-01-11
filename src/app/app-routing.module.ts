import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasModule)
  },
    {
    path:'lugares',
    loadChildren: () => import('./pages/lugares/lugares.module').then(m => m.LugaresModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
