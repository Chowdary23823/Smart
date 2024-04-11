import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { ProductServicesService } from '../Services/product-services.service';

export class CanDeactivateGuard<T> implements CanDeactivate<T>{

  constructor(private service:ProductServicesService){}
  
  canDeactivate(component: T): boolean {
    return this.service.canDeactivate;
  }

}
