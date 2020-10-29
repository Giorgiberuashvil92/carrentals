import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getItinerary(id: string): Observable<any> {
    return this.httpClient.get<any>(`/itineraries/${id}`);
  }
}
