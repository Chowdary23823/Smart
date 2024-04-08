import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { CredentialsService } from '../Services/credentials.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:CredentialsService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    //for developing purpose i'm directly returnning the true;
    console.log("can Auth")
    return true;
    if (this.service.isLoggedIn === true){
      console.log("User is logged in");
      return true;
    }else{
      window.alert('Please log in first');
      //return redirect to login page
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
