import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;


  constructor(private router: Router) {}

  signin() {
    this.isLoggedIn = true;
    
  }

  logout() {
    this.isLoggedIn = false;
     
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
 