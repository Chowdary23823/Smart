import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './employee/home/home.component';
import { NavigationComponent } from './employee/navigation/navigation.component';
import { AddCategoryComponent } from './employee/add-category/add-category.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AddSubcategoryComponent } from './employee/add-subcategory/add-subcategory.component';
import { AddProductComponent } from './employee/add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgFor, NgIf } from '@angular/common';
import { MainComponent } from './employee/main/main.component';
import { CategoryComponent } from './employee/category/category.component';
import { SubCategoryComponent } from './employee/sub-category/sub-category.component';
import { ProductListComponent } from './employee/Product/product-list/product-list.component';
import { BillingComponent } from './employee/billing/billing.component';
import { ProductComponent } from './employee/Product/product/product.component';
import { ListfilterPipe } from './Pipes/listfilter.pipe';
import { RequestInterceptor } from './Interceptors/requests.interceptor';
import { CredentialsService } from './Services/credentials.service';
import { ProductServicesService } from './Services/product-services.service';
import { APIServicesService } from './Services/apiservices.service';
import { SoldItemsComponent } from './employee/sold-items/sold-items.component';
import { CanDeactivateGuard } from './Guards/can-deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    AddCategoryComponent,
    AddSubcategoryComponent,
    AddProductComponent,
    MainComponent,
    CategoryComponent,
    SubCategoryComponent,
    ProductListComponent,
    BillingComponent,
    ProductComponent,
    ListfilterPipe,
    SoldItemsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    
  ],
  providers: [ CredentialsService,ProductServicesService,APIServicesService,{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
