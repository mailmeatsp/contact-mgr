import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler(loginFormData: any): void {
    this.authService.login(loginFormData.value)
      .subscribe((res: any) => {
        if (res && res.token) {
          // 1. save the token in browser's storage - LocalStorage /SessionStorage
          this.authService.saveToken(res.token);
          this.router.navigateByUrl('/');
        }
      });
  }

}
