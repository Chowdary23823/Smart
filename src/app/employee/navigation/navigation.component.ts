import { Component } from '@angular/core';
import { CredentialsService } from '../../Services/credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  
  constructor(public service:CredentialsService,private router:Router){}
  logout()
  {
    
    this.service.isLoggedIn=false;
    this.router.navigate(['login']);
  }
}
