import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Model/Users';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  userEmail:any;
  
  //email="kushal@gmail.com";
  password="kushal";
  //the above b
  isLoggedIn:boolean =false;

  AuthanticateURL="http://localhost:5123/Authuntication/Authuntication"
  RegisterURL="http://localhost:5123/Authuntication/Register"
  constructor(public http: HttpClient) { }

  Authanticate(email: any ,password: any )
  {
    return this.http.get(this.AuthanticateURL+"?email="+email+"&password="+password);
  }


  Register(user : Users)
  {
    return this.http.post(this.RegisterURL,user);
  }

}
