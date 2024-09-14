import { Component, OnInit } from '@angular/core';
import { APIServicesService } from '../../../Services/apiservices.service';
import { Product } from '../../../Model/Product';
import { ProductServicesService } from '../../../Services/product-services.service';
import { async, count, filter, max, of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements  OnInit {
  data: any = []
  noOfProducts:any;
  from:number=0
  topass:number=9999;
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

  exp:any=[
    {
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
    },
    {
      id:10,
      name: 'Product10',
      description: 'Product Desc10',
      price: 15,
      quantity: 10,
      subCategory: {
        name:"Kues",
        category:{
          name:"jahaj"
        }
      }
    }
    
  ]
  constructor(private apiService:APIServicesService,public productSerice:ProductServicesService){}


  ngOnInit() {
    this.getProductData();
    //this.productSerice.canShowChild=false;
    this.productSerice.canShowChild=false;
    console.log("jjaja")

  }
  removedData:any
  remove(id:number,quantity:number){
    if(quantity>0)
      {
        alert("The Quantity is greater than 0 so you can't delete the Product");
      }
    console.log(id);
    this.apiService.removeProduct(id).subscribe(res=>{
      this.removedData = res;
      console.log(res)
      
    })
  }

  async getProductData(){
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
  result:any;
  searched:boolean=false;
  //search(){
    
    // const dataOf = of(...this.data);
    // this.searched=true;
    // this.result = dataOf.pipe(
    //   filter((i:any) => i.price>this.from && i.price<this.to)
    // );
    // const updatedData:any =[]
    // this.result.subscribe((x: any) => updatedData.push(x));
    // this.data=updatedData;
  

  //}
}
