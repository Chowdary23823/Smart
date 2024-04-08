import { Component, OnInit } from '@angular/core';
import { APIServicesService } from '../../../Services/apiservices.service';
import { Product } from '../../../Model/Product';
import { ProductServicesService } from '../../../Services/product-services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements  OnInit {
  data: any = []

  public passToChild:any={
    id:9,
    name: 'Product',
    description: 'Product Desc',
    price: 15,
    quantity: 10,
    subCategory: {
      name:"Kues",
      category:{
        name:"jahaj"
      }
    }
  };
  constructor(private apiService:APIServicesService,private productSerice:ProductServicesService){}


  ngOnInit() {
    this.getProductData();
    //this.productSerice.canShowChild=false;
    console.log("jjaja")

  }

  getProductData(){
    console.log("get in home called");
       this.apiService.getProductsData().subscribe(res=>{
        this.data = res;
      })
  }

  

  canShowChild(row:any){
    console.log("can show child turned true")
    this.productSerice.canShowChild=true;
    this.passToChild= row;
  }
}
