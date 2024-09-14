import { Component, OnInit } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements  OnInit{
  data: any;
  constructor(private apiSerivce:APIServicesService)
  {}
   
  
  
  ngOnInit()
  {
    this.getCatgoryData();
  }
  
  
  getCatgoryData()
    {
      console.log("get in home called");
       this.apiSerivce.getCategoriesData().subscribe(res=>{
        this.data = res;
      })
      
     
    }
  
}
