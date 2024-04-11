import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './employee/home/home.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AddCategoryComponent } from './employee/add-category/add-category.component';
import { MainComponent } from './employee/main/main.component';
import { AddSubcategoryComponent } from './employee/add-subcategory/add-subcategory.component';
import { AddProductComponent } from './employee/add-product/add-product.component';
import { ProductListComponent } from './employee/Product/product-list/product-list.component';
import {  ToShowProductDeatilsGuard } from './Guards/CanActivateChildProductGuard';
import { BillingComponent } from './employee/billing/billing.component';
import { ProductComponent } from './employee/Product/product/product.component';
import { SoldItemsComponent } from './employee/sold-items/sold-items.component';
import { CanDeactivateGuard } from './Guards/can-deactivate.guard';

const routes : Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate:[AuthGuard],
    
  },
  {
    path:'home',
    component: MainComponent,
    canActivate:[AuthGuard],
    
   

    
  },
  {
  path:'login',
  component:LoginComponent
  
  },{
    path:'addcategory',
    component:AddCategoryComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'addsubcategory',
    component:AddSubcategoryComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'addproduct',
    component:AddProductComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'productList',
    component:ProductListComponent,
    canActivate:[AuthGuard],
    
  },
  {
    path:'billing',
    component:BillingComponent,
    canActivate:[AuthGuard],
    
    
  },{
    path:'solditems',
    component:SoldItemsComponent,
    canActivate:[AuthGuard],
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard,ToShowProductDeatilsGuard]
})
export class AppRoutingModule { }
