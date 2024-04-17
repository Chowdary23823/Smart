import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup } from '@angular/forms';
import { CredentialsService } from '../Services/credentials.service';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Users } from '../Model/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isNewUser=false;
login= new FormGroup({
  email: new FormControl('',[]),
  password: new FormControl('',[])
})

signUp=new FormGroup({
  name: new FormControl(),
  email: new FormControl(),
  newpassword: new FormControl(),
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
  return this.service.Authanticate(this.login.value.email,this.login.value.password)
}

NewUser(){
  this.isNewUser=true;

}

ExistingUser(){
  this.isNewUser=false;
}

User:Users={
  Name: '',
  Email: '',
  Password: ''
}
onSignUp(){
  this.User.Email=this.signUp.value.email;
  this.User.Name=this.signUp.value.name;
  this.User.Password=this.signUp.value.newpassword;
  this.service.Register(this.User).subscribe({
    next:(res)=>{
      console.log("User Submitted")
      alert("User Added Succesfully")
      this.ExistingUser();
      this.router.navigate(['/login']);
    },
    error: (err) => {
      console.error('Error: ' + err);
      alert("User Not Added Error Occured")
    }
    
  })
}

}
