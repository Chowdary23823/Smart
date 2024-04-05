import { Component } from '@angular/core';
import { Category } from '../../Model/Category';
import { FormControl, FormGroup } from '@angular/forms';
import { APIServicesService } from '../../Services/apiservices.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  addCategory = new FormGroup({
    
    name : new FormControl(),
    desc : new FormControl()
  });

  newObj :Category={
    
    Name:'Reference Obj',
    Description: 'Ref Obj',
  }

  constructor(private apiService: APIServicesService,private router:Router){

  }

  
  onSubmit()
  {
    console.log(this.addCategory.value);
    
    //this.newObj.Id = this.addCategory.value.id;
    this.newObj.Name = this.addCategory.value.name;
    this.newObj.Description = this.addCategory.value.desc;

    this.apiService.postCategory(this.newObj).subscribe({
      next:(res)=>{
        console.log("Submitted")
      }
    })
    alert("Category Added Succesfully")
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    console.log("this is add category")
    
  }
}
