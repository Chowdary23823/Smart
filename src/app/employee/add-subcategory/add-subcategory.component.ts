import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APIServicesService } from '../../Services/apiservices.service';
import { SubCategory } from '../../Model/SubCategory';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrl: './add-subcategory.component.css'
})
export class AddSubcategoryComponent implements OnInit{
  dataList: any = [];
  addSubCategory = new FormGroup({
    
    name : new FormControl(),
    desc : new FormControl(),
    catId : new FormControl()
  });

  newObj :SubCategory={
    Name: 'Reference Obj',
    Description: 'Ref Obj',
    CategoryId: 1
  }


  constructor(private apiService:APIServicesService,private router:Router){}

  ngOnInit()
  {
    this.getCategories();
  }


  getCategories()
  {
    console.log("get in home called");
     this.apiService.getCategoriesData().subscribe(res=>{
      this.dataList = res;
    })
  }
  onSubmit()
  {
    console.log(this.addSubCategory.value);
    this.newObj.Name = this.addSubCategory.value.name;
    this.newObj.Description = this.addSubCategory.value.desc;
    this.newObj.CategoryId=this.addSubCategory.value.catId;

    this.apiService.postSubCategory(this.newObj).subscribe({
      next:(res)=>{
        console.log("Submitted")
        alert("Sub Category Added Succesfully")
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error: ' + err);
        alert("Sub Category Not Added Error Occured")
      }
      
    })
    

  }
}
