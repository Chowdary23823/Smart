import { Component, OnInit } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
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
     this.apiSerivce.getCategoriesData().subscribe(res=>{
      this.data = res;
    })
    
   
  }


}
