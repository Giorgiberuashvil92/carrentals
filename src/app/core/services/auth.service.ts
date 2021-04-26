import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment'
import { clientModel } from '../models/registration.model';
import {LoginReq, LoginRes} from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private urlSuffix =  environment.API_URL + '/auth';

  constructor(private httpClient: HttpClient) {
  }

  login(loginBody: LoginReq): Observable<LoginRes> {
    return this.httpClient.post<LoginRes>(this.urlSuffix + '/login', loginBody);
  }

  register(registerBody: clientModel): Observable<clientModel> {
    return this.httpClient.post<clientModel>(this.urlSuffix + '/register', registerBody);
  }

  setUserLogedIn(){
    return this.loggedIn.next(true);
 }

}
