import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  userEmail:any;
  
  //email="kushal@gmail.com";
  password="kushal";
  //the above b
  isLoggedIn:boolean =false;
  constructor() { }
}
