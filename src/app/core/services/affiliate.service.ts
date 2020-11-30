import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { act } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { AffiliateActivityTypesResponse, AffiliatePartnerActivitiesLiveSearchResponse, AffiliatePartnerActivitiesResponse, AffiliatePartnerTransportsResponse } from 'src/app/store/models';

@Injectable({
  providedIn: 'root'
})
export class AffiliateService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAffiliatePartnerActivities$(query: string): Observable<AffiliatePartnerActivitiesResponse> {
    return this.httpClient.get<AffiliatePartnerActivitiesResponse>(`/affiliate/partner-activities?${query}`);
  }

  getAffiliatePartnerActivitiesLiveSearch$(cityId: string, activityTypeId?: string, text?: string): Observable<AffiliatePartnerActivitiesLiveSearchResponse> {
    let query = `city-id=${cityId}`;
    if(activityTypeId) query += `&activity-type-ids=${activityTypeId}`;
    if(text) query += `&text=${text}`;
    return this.httpClient.get<AffiliatePartnerActivitiesLiveSearchResponse>(`/affiliate/partner-activities/live-search?${query}`);
  }

  getAffiliateActivityTypes$(): Observable<AffiliateActivityTypesResponse> {
    return this.httpClient.get<AffiliateActivityTypesResponse>('/affiliate/activity-types');
  }

  getAffiliatePartnerTransports$(itineraryId: string, cityId: string): Observable<AffiliatePartnerTransportsResponse> {
    console.log(itineraryId, cityId)
    // return of();
    return this.httpClient.get<AffiliatePartnerTransportsResponse>(`/affiliate/partner-transports`);
    // return this.httpClient.get<AffiliatePartnerTransportsResponse>(`/affiliate/partner-transports?itinerary-id=${itineraryId}&city-id=${cityId}`);
  }

  test() {
    console.log('test');
  }
}
