import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor() { }
  
  canShowChild: boolean=false;
  canDeactivate: boolean=true;
  
}
