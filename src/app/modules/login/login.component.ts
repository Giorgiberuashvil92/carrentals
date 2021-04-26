import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import { LoginReq, LoginRes } from 'src/app/core/models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public token;
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public authService: AuthService, public cookieService: CookieService,public router: Router) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onLoginSubmit(){
    this.authService.login(this.loginForm.value).subscribe((res: LoginRes) => {
      this.token = localStorage.setItem('token',res.token);
      this.router.navigate(['carrent']);
      this.authService.setUserLogedIn();
    })
  }
}
