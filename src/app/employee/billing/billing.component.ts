import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent implements OnInit{
  error:boolean = false;
  
  myForm: any;
  isSubbmit = false;

  productsData:any = [
    {"id":1,
    "name": "Product A",
    "description":"Priod desc",
    "price":20,
    "quantity":150
  }
,{"id":1,
"name": "Product B",
"description":"Priod desc",
"price":20,
"quantity":150
},{"id":1,
"name": "Product C",
"description":"Priod desc",
"price":20,
"quantity":157
}
  ];

  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.myForm = this.fb.group({
      items: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          quantity: [0, [Validators.required, Validators.min(1)]],
          price: [0, Validators.required],
          quantityrequried:['',Validators.required]
        }),
      ]),
    });
  }

  addItem() {
    const item = this.fb.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0],
      quantityrequried:['']
    });

    this.items.push(item);
  }

  get items() {
    return this.myForm.get('items') as FormArray;
  }

  onSubmit() {
    this.isSubbmit = true;
    console.log(this.items.value);
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
  
  console.log("This after assign",this.myForm.value.items[i])
  }

  requriedChecking(i:any)
  {
    console.log("checking")
    if(this.myForm.value.items[i].quantityrequried<=this.myForm.value.items[i].quantity)
      this.error=false;
     else{
       this.error=true;
     }

  }


  
}
