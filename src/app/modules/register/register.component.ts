import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginRes } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  authService: any;
  token: void;
  router: any;
  registerForm: FormGroup;
  errMsg: any;

  constructor(public auth: AuthService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeRegisterForm();
  }

  initializeRegisterForm() {
    this.registerForm = new FormGroup({
      name: new FormControl(null,),
      email: new FormControl(null,),
      username: new FormControl(null,),
      password: new FormControl(null,),
      phone: new FormControl(null,),
      lastName: new FormControl(null,)
    });
  }

  onRegisterFormSubmit() {
    this.auth.register(this.registerForm.value).subscribe(articles => {
      if(articles){

      }
    })
  }

}

