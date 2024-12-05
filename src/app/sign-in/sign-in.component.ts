import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  submitted = false;
  invalidCredentials = false;
  invalidEmail = false;
  invalidPassword = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.signInForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.invalidEmail = false;
    this.invalidPassword = false;

    if (this.signInForm.invalid) {
      return;
    }

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    const inputEmail = this.signInForm.get('email')?.value;
    const inputPassword = this.signInForm.get('password')?.value;

    if (inputEmail === storedEmail && inputPassword === storedPassword) {
      alert('Sign in successful!');
      this.router.navigate(['/']);
    } else {
      if (inputEmail !== storedEmail && inputPassword !== storedPassword) {
        this.invalidEmail = true;
        this.invalidPassword = true;
        alert('Invalid email and password. Please try again.');
      } else if (inputEmail !== storedEmail) {
        this.invalidEmail = true;
        alert('Invalid email. Please try again.');
      } else if (inputPassword !== storedPassword) {
        this.invalidPassword = true;
        alert('Invalid password. Please try again.');
      }
    }
  }
}
