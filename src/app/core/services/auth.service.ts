import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { 
  SignUpAuthActionFailureResponse, 
  SignUpAuthActionRequest, 
  SignUpAuthActionSuccessResponse,
  SignInAuthActionFailureResponse, 
  SignInAuthActionRequest, 
  SignInAuthActionSuccessResponse 
} from 'src/app/store/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  signUpUser$(payload: SignUpAuthActionRequest): Observable<SignUpAuthActionSuccessResponse | SignUpAuthActionFailureResponse> {
    return this.httpClient.post<SignUpAuthActionSuccessResponse | SignUpAuthActionFailureResponse>('/profile', payload);
  }

  signInUser$(payload: SignInAuthActionRequest): Observable<SignInAuthActionSuccessResponse | SignInAuthActionFailureResponse> {
    return this.httpClient.post<SignInAuthActionSuccessResponse | SignInAuthActionFailureResponse>('/session', payload);
  }
}
