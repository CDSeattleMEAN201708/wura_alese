import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductComponent},
  {path: 'product/new', component: NewProductComponent},
  {path: 'product/new/pre', redirectTo: 'products', pathMatch: 'full'},
  {path: 'edit/:id', component: EditProductComponent},
  {path: 'delete/:id', redirectTo: 'products', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
