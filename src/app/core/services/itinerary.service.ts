import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItineraryResponse } from 'src/app/store/models';


@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  constructor(private httpClient: HttpClient) { }

  getItinerary$(id: string): Observable<ItineraryResponse> {
    return this.httpClient.get<ItineraryResponse>(`/itineraries/${id}`);
  }

  deleteTour$(itineraryId: string, id: string): Observable<ItineraryResponse> {
    return this.httpClient.delete<ItineraryResponse>(`/itineraries/${itineraryId}/tours/${id}`);
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
