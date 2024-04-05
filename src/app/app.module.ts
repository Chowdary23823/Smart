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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddSubcategoryComponent } from './employee/add-subcategory/add-subcategory.component';
import { AddProductComponent } from './employee/add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgFor, NgIf } from '@angular/common';
import { MainComponent } from './employee/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    AddCategoryComponent,
    AddSubcategoryComponent,
    AddProductComponent,
    MainComponent
    
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
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
