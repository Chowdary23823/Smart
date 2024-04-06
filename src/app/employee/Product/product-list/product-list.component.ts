import { Component, OnInit } from '@angular/core';
import { APIServicesService } from '../../../Services/apiservices.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements  OnInit {
  data: any = []
  constructor(private apiService:APIServicesService){}


  ngOnInit() {
    this.getProductData();

  }

  getProductData(){
    //console.log("get in home called");
       this.apiService.getProductsData().subscribe(res=>{
        this.data = res;
      })
  }
}
