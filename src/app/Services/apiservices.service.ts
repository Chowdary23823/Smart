import { Injectable } from '@angular/core';
import { Category } from '../Model/Category';
import { HttpClient } from '@angular/common/http';
import { SubCategory } from '../Model/SubCategory';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class APIServicesService {

  addCategoryApiUrlPost="http://localhost:5123/Category/NewCategory"


  GetCategoriesDataApiUrl="http://localhost:5123/Category/GetAllCategories"


  addSubCategoryApiUrlPost="http://localhost:5123/SubCategory/NewSubCategory"

  GetSubCategoriesDataApiUrl="http://localhost:5123/SubCategory/GetAllSubCategories"


  addProductApiUrlPost="http://localhost:5123/SuperMarket/AllNewProduct"

  GetProductDataApiUrl="http://localhost:5123/SuperMarket/GetAllProducts"

  constructor(public http: HttpClient) {
    
  }

  postCategory(data:Category)
  {
    return this.http.post(this.addCategoryApiUrlPost ,data);
  }

  getCategoriesData(){
    console.log("get in service called")
    return this.http.get(this.GetCategoriesDataApiUrl);
  }


  postSubCategory(data:SubCategory){
    return this.http.post(this.addSubCategoryApiUrlPost ,data);
  }

  getSubCategoriesData(){
    return this.http.get(this.GetSubCategoriesDataApiUrl);
  }

  postProduct(data:Product){
    return this.http.post(this.addProductApiUrlPost ,data);
  }

  getProductsData(){
    return this.http.get(this.GetProductDataApiUrl);
  }

}
