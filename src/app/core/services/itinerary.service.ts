import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItineraryAlternateToursResponse, ItineraryResponse, ItinerarySolutionsForTourResponse, ItineraryToursSearchResponse, PostItinerarySolutionsForTourResponse, UpdateItineraryTourOrTransportResponse } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';


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

  getItineraryAlternateTours$(itineraryId: string, id: string): Observable<ItineraryAlternateToursResponse>{
    return this.httpClient.get<ItineraryAlternateToursResponse>(`/itineraries/${itineraryId}/tours/${id}/alternative`);
  }

  updateItineraryTourOrTransport$(itineraryId: string, id: string, body: any): Observable<UpdateItineraryTourOrTransportResponse> {
    return this.httpClient.put<UpdateItineraryTourOrTransportResponse>(`/itineraries/${itineraryId}/tours/${id}`, { data: body });
  }

  getItineraryToursSearch$(itineraryId: string, interestIds: string[]): Observable<ItineraryToursSearchResponse>{
    const query = interestIds.reduce((a, b) => `${a}interest-ids[]=${b}&`, '');
    return this.httpClient.get<ItineraryToursSearchResponse>(`/itineraries/${itineraryId}/tours/search?${query.substr(0, query.length - 1)}`)
  }

  getItinerarySolutionsForTour$(itineraryId: string, tourOfferId: string): Observable<ItinerarySolutionsForTourResponse>{
    return this.httpClient.get<ItinerarySolutionsForTourResponse>(`/itineraries/${itineraryId}/tours/solutions?tour-offer-id=${tourOfferId}`);
  }

  postItinerarySolutionForTour$(itineraryId: string, body: any): Observable<PostItinerarySolutionsForTourResponse>{
    return this.httpClient.post<PostItinerarySolutionsForTourResponse>(`/itineraries/${itineraryId}/tours`, { data: body });
  }

  updateItinerary$(id: string, body: any): Observable<ItineraryResponse> {
    return this.httpClient.put<ItineraryResponse>(`/itineraries/${id}`, { data: body });
  }

  findCityById(itinerary: ItineraryState, id: string) {
    return itinerary.data['included'].find(i => i.type === 'cities' && i.id === id);
  }

  findDayById(itinerary: ItineraryState, id: string) {
    return itinerary.data['included'].find(i => i.type === 'days' && i.id === id);
  }

  findCity(itinerary: ItineraryState, day: any): string {
    if(day['relationships']['starting-city'].data && day['relationships']['starting-city'].data.id 
        && day['relationships']['ending-city'].data && day['relationships']['ending-city'].data.id 
        && day['relationships']['starting-city'].data.id !== day['relationships']['ending-city'].data.id) {
      return itinerary.data['included'].find(i => i.type === 'cities' && i.id === day['relationships']['starting-city'].data.id).attributes.name
         + ' - ' 
         + itinerary.data['included'].find(i => i.type === 'cities' && i.id === day['relationships']['ending-city'].data.id).attributes.name;
    }
    if(day['relationships']['starting-city'].data && day['relationships']['starting-city'].data.id) {
      return itinerary.data['included'].find(i => i.type === 'cities' && i.id === day['relationships']['starting-city'].data.id).attributes.name;
    } else if(day['relationships']['ending-city'].data && day['relationships']['ending-city'].data.id) {
      return itinerary.data['included'].find(i => i.type === 'cities' && i.id === day['relationships']['ending-city'].data.id).attributes.name;
    }
    return 'Location Not Found';
  }

  generateDay(itinerary: ItineraryState) {
    return itinerary.data['included'].find(i => i.type === 'days' && i.id === itinerary.data.data['relationships'].days.data[itinerary.dayIndex-1].id);
  }

  generateTours(itinerary: ItineraryState, day: any) {
    return day['relationships']['tours'].data.map(t => itinerary.data['included'].find(i => i.type === 'tours' && i.id === t.id));
  }

  generateWaypoints(itinerary: ItineraryState, tours: any) {
    return tours[itinerary.tourIndex]['relationships'].pois.data.map(d => itinerary.data['included'].find(i => i.type === 'waypoints' && i.id === d.id));
  }
}
