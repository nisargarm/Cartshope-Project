import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {
  showButton: boolean = true;
  private routesWithBackButton = ['/sign-in', '/wishlink', '/register'];
  constructor(private location: Location, private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.showButton = this.router.url !== '/';  
    });

  }

  goBack() {
    this.location.back();
  }
}
