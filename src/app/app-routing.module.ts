import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/components/product/product.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  // {
  //   path:'prod',
  //   loadChildren:'./products/products.module#ProductsModule'
  // }
  {
    path:'prod',
    component:ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
