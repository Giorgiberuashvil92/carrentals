import { ChangeDetectorRef } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userLogedIn;

  constructor(
    public router: Router,
    public dialogService: DialogService,
    public authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {
    this.authService.loggedIn.subscribe(res => {
      this.userLogedIn = res;
    })
    console.log(this.userLogedIn)
  }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/carrent');
    this.authService.loggedIn.next(false);
  }

  ngOnDestroy() {
  }
}
