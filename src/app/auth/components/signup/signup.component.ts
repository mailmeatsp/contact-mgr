import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  signupInfo: any = {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signupHandler(signupFormData: any): void {
    this.authService.signup(signupFormData.value)
      .subscribe((res: any) => {
        alert('Signup successful! Redirecting to login page...');
        this.router.navigateByUrl('/login');
      });
  }

}
