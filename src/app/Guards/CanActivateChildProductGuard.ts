import { ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { ProductServicesService } from '../Services/product-services.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToShowProductDeatilsGuard implements CanActivateChild{

  constructor(private productService: ProductServicesService){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log("testing")
    return this.productService.canShowChild;
    
    //return false;
  }

}
