import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadItinerarySuccessActionResponse } from 'src/app/store/models';


@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  constructor(private httpClient: HttpClient) { }

  getItinerary(id: string): Observable<LoadItinerarySuccessActionResponse> {
    return this.httpClient.get<LoadItinerarySuccessActionResponse>(`/itineraries/${id}`);
  }

  getItineraryAlternateTours(itineraryId:string,id:string){
    return this.httpClient.get<any>(`/itineraries/${itineraryId}/tours/${id}/alternate`);
  }

  getItineraryToursSearch(itineraryId:string){
    return this.httpClient.get<any>(`/itineraries/${itineraryId}/tours/search`)
  }

  getItinerarySolutions(itineraryId:string){
    return this.httpClient.get<any>(`/itineraries/${itineraryId}/tours/solutions`)
  }
}
