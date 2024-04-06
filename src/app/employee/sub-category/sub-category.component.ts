import { Component } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css'
})
export class SubCategoryComponent {
  data: any;
  constructor(private apiSerivce:APIServicesService)
  {}
   
  
  
  ngOnInit()
  {
    this.get();
  }
  
  
  get()
    {
      console.log("get in home called");
       this.apiSerivce.getSubCategoriesData().subscribe(res=>{
        this.data = res;
      })
      
     
    }
}
