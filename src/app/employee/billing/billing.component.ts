import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoldItems } from '../../Model/SoldItems';
import { APIServicesService } from '../../Services/apiservices.service';
import { Router } from '@angular/router';
import { ProductServicesService } from '../../Services/product-services.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent implements OnInit{
  error:boolean = false;
  billSum =0;
  myForm: any;
  isSubbmit = false;
  userName="";
  productsData:any = [
    {"id":1,
    "name": "Product A",
    "description":"Priod desc",
    "price":20,
    "quantity":150
  }
,{"id":2,
"name": "Product B",
"description":"Priod desc",
"price":20,
"quantity":150
},{"id":3,
"name": "Product C",
"description":"Priod desc",
"price":20,
"quantity":157
}
  ];
  nameEntered(){
    if(this.userName!== ""){
      this.productService.canDeactivate=false;
    }else{
      this.productService.canDeactivate=true;
    }
  }
  

  

  constructor(private fb: FormBuilder,private apiService:APIServicesService,private router:Router,private productService:ProductServicesService) {}

  ngOnInit(): void {

    this.getProducts();
    this.myForm = this.fb.group({
      items: this.fb.array([
        this.fb.group({
          userName: [this.userName, Validators.required],
          itemId:[0],
          date:[''],
          name: ['', Validators.required],
          quantity: [0, [Validators.required, Validators.min(1)]],
          price: [0, Validators.required],
          quantityrequried:['',Validators.required],
          errorLable:false
        }),
      ]),
    });
  }


  getProducts()
  {
    console.log("get products called");
     this.apiService.getProductsData().subscribe(res=>{
      this.productsData = res;
    })
  }

  addItem() {
    const item = this.fb.group({
      userName: [this.userName, Validators.required],
      itemId:[0],
      date:[''],
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0],
      quantityrequried:[''],
      errorLable:false
    })

    this.items.push(item);
  }

  get items() {
    return this.myForm.get('items') as FormArray;
  }

  onSubmit() {
    this.isSubbmit = true;
    const itemsArray = this.myForm.get('items') as FormArray;
    itemsArray.controls.forEach((itemControl:any) => {
    
    const quantity = itemControl.get('quantityrequried').value;
    const price = itemControl.get('price').value;
    const totalPriceForItem = quantity * price; 
    console.log("this is foreach",totalPriceForItem,"qa",quantity)   
    this.billSum += totalPriceForItem;
    })

    const soldItemsList: SoldItems[] = [];

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(currentDate.getDate()).padStart(2, '0');
    const dateOnlyString = `${year}-${month}-${day}`;
    
    
    itemsArray.controls.forEach((control :any)=> {
    const soldItem: SoldItems = {
      Date: dateOnlyString,
      Name: control.get('name')?.value, 
      ItemId: control.get('itemId')?.value, 
      Quantity: control.get('quantityrequried')?.value, 
      TotalPrice: (control.get('quantityrequried')?.value * control.get('price')?.value )
    };

    
    soldItemsList.push(soldItem);

    
  });
  console.log(soldItemsList, "is a list to be inserted")
  this.apiService.postSoldItems(soldItemsList).subscribe({
    next:(res)=>{
      console.log("Submitted")
      window.print();

      alert("Products Sold Succesfully")
      console.log(this.items.value);
      this.router.navigate(['/home']);
    },
    error: (err) => {
      console.error('Error: ' + err);
      alert(" Error Occured")
    }
    
  })

  
    

    
  }

  remove(i:any)
  {
    const control = <FormArray>this.myForm.controls['items'];
    control.removeAt(i);
  }

  getAllDetails(i:any)
  {
    console.log("came")
    console.log("This",this.myForm.value.items[i])
    const data = this.items.value[i].name;
    const lowerCaseName = data.toLowerCase();
  const currProduct = this.productsData.filter((product:any) => product.name.toLowerCase().includes(lowerCaseName));
  console.log(data,currProduct[0].price)
  console.log(this.myForm.value.items[i].price, "is unchanged ")
  
  this.myForm.get('items').at(i).get('quantity').setValue(currProduct[0].quantity);
  this.myForm.get('items').at(i).get('price').setValue(currProduct[0].price);
  this.myForm.get('items').at(i).get('userName').setValue(this.userName);
  this.myForm.get('items').at(i).get('itemId').setValue(currProduct[0].id);

  console.log("this is id",this.myForm.value.items[i].itemId)
  console.log("This after assign",this.myForm.value.items[i])
  }

  requriedChecking(i:any)
  {
    console.log("checking")
    if(this.myForm.value.items[i].quantityrequried<=this.myForm.value.items[i].quantity)
      this.myForm.value.items[i].errorLable=false;
     else{
      this.myForm.value.items[i].errorLable=true;
     }

  }


  
}
