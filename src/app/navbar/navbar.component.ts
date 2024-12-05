import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
import { Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
  isLoggedIn: boolean = false;
 
router: any;
signin: any;
submitted: any;
signInForm: any;
invalidPassword: any;
invalidEmail: any;

  
  

  constructor(private dataStorage: DataStorageService, public authService: AuthService) { }

  @Input() cartCount: number = 0;
  ngOnInit(): void {
    const cartData = this.dataStorage.getCartData();
    this.cartCount = cartData ? cartData.length : 0;
    
  }
  
  onsignin() {
    this.router.navigate(['/sign-in']);
  }


  onLogout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    this.router.navigate(['/home']);

  }

}
 