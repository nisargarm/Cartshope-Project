import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component'; 
import { SignInComponent } from './sign-in/sign-in.component';
import { WishlinkComponent } from './wishlink/wishlink.component';
import { LogoutComponent } from './logout/logout.component';
import { FeedbackComponent } from './feedback/feedback.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product-page/:name',component:ProductPageComponent},
  {path:'product-detail/:name/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'wishlink', component: WishlinkComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent },
  { path: 'feedback', component: FeedbackComponent },  // Feedback route
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
