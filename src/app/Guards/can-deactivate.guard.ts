import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Product } from '../Model/Product';
import { ProductServicesService } from '../Services/product-services.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard<T> implements CanDeactivate<T>{
  constructor(private service:ProductServicesService){}
  canDeactivate(component: T): boolean {
    return this.service.canDeactivate;
  }

}

