import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router){
    console.log(this.authService.loggedIn.getValue())
  }


  canActivate(): boolean{
    if(this.authService.loggedIn.getValue()){
      return true
    } else {
      return false
    }
  }

}
