import { Component } from '@angular/core';
import { CredentialsService } from '../../Services/credentials.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private service:CredentialsService){}
  logout()
  {
    
    this.service.isLoggedIn=false;
  }
}
