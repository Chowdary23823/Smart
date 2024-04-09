import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup } from '@angular/forms';
import { CredentialsService } from '../Services/credentials.service';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
login= new FormGroup({
  email: new FormControl('',[]),
  password: new FormControl('',[])
})

constructor(private service: CredentialsService,private router: Router)
{

}
onSubmit(){
  if(this.isValid()){
        this.service.isLoggedIn=true;
        this.service.userEmail=this.login.value.email;
    console.log("User is logged in ");
    this.router.navigate(['/home']);
  }else{
    alert("Please fill out all fields Correctly");
  }
  
}

isValid()
{
  if( this.login.value.password==this.service.password)
  {
    return true;
  }else{
    return false;
  }
}
}
