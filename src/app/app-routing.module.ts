import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},

  {path: 'ui', loadChildren: () => import('./modules/ui/ui.module').then(m => m.UiModule)},
  {path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
