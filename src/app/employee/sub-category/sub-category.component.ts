import { Component, EventEmitter, Output } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css'
})
export class SubCategoryComponent {

  @Output() childSearchEvent = new EventEmitter();
  @Output() onInitEvent = new EventEmitter();
  data: any;
  constructor(private apiSerivce:APIServicesService)
  {}
  search: string ="";
  
  
  ngOnInit()
  {
    this.get();
    this.onInitEvent.emit(this.data);
  }
  
  
  get()
    {
      console.log("get in home called");
       this.apiSerivce.getSubCategoriesData().subscribe(res=>{
        this.data = res;
      })
      
     
    }
    onSearch()
    {
      this.childSearchEvent.emit(this.search );
      
    }
}
