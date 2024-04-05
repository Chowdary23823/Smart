import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {


  email="kushal@gmail.com";
  password="kushal";
  isLoggedIn:boolean =false;
  constructor() { }
}
