import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesResponse } from 'src/app/store/models';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCities$(): Observable<CitiesResponse> {
    return this.httpClient.get<CitiesResponse>('/cities');
  }
}
