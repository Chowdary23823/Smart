import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './employee/home/home.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AddCategoryComponent } from './employee/add-category/add-category.component';
import { MainComponent } from './employee/main/main.component';
import { AddSubcategoryComponent } from './employee/add-subcategory/add-subcategory.component';
import { AddProductComponent } from './employee/add-product/add-product.component';

const routes : Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'home',
    component: MainComponent,
    canActivate:[AuthGuard]
  },
  {
  path:'login',
  component:LoginComponent
  },{
    path:'addcategory',
    component:AddCategoryComponent
  },
  {
    path:'addsubcategory',
    component:AddSubcategoryComponent
  },
  {
    path:'addproduct',
    component:AddProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
