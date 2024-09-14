import { Component } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';

@Component({
  selector: 'app-sold-items',
  templateUrl: './sold-items.component.html',
  styleUrl: './sold-items.component.css'
})
export class SoldItemsComponent {
  soldData:any=[]
  constructor(private apiSerivce:APIServicesService)
  {}
   
  
  
  ngOnInit()
  {
    this.getAllSoldData();
  }
  
  
  getAllSoldData()
    {
      
       this.apiSerivce.getAllSoldData().subscribe(res=>{
        this.soldData = res;
      })
      console.log(this.soldData)
      
     
    }
}
