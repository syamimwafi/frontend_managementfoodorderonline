import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FaqComponent } from './faq/faq.component';
const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'addcustomer', component: AddcustomerComponent},
  {path: 'addcustomer', component:AddcustomerComponent},
  {path: 'viewcustomer', component: ViewcustomerComponent},
  {path: 'updateproduct/:id', component: UpdateproductComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product', component: ProductComponent},
  {path: 'updatecustomer/:id', component: UpdatecustomerComponent},
  {path: 'viewproduct', component: ViewproductComponent},
  {path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
