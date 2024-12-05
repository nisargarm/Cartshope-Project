import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  cartCount: any;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
