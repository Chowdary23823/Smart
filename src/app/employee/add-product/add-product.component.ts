import { Component, OnInit } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../Model/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements  OnInit {
  dataList:any=[]

  constructor(private apiService:APIServicesService, private router:Router){}
  ngOnInit(){
    this.GetSubCategories();
  }


  GetSubCategories()
  {
    this.apiService.getSubCategoriesData().subscribe(res=>{
      this.dataList = res;
    })
  }

  addProduct=new FormGroup({
    name : new FormControl(),
    desc:new FormControl(),
    price:new FormControl(),
    quantity:new FormControl(),
    subCatId : new FormControl()
  })

  newObj :Product={
    Name: 'Reference Obj',
    Description: 'Ref Obj',
    Price: 0,
    Quantity: 1,
    SubCategoryId: 1
  }

  onSubmit(){
    this.newObj.Name = this.addProduct.value.name;
    this.newObj.Description = this.addProduct.value.desc;
    this.newObj.Price = this.addProduct.value.price;
    this.newObj.Quantity= this.addProduct.value.quantity;
    this.newObj.SubCategoryId = this.addProduct.value.subCatId;
    
    console.log("Form is submitted:"+JSON.stringify(this.newObj));

    this.apiService.postProduct(this.newObj).subscribe({
      next:(res)=>{
        console.log("Submitted")
        alert("Product Added Succesfully")
    this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error: ' + err);
        alert("Product Not Added Error Occured")
      }
    })
    

  }
}
