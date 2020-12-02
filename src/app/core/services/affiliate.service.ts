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

  getAffiliatePartnerTransports$(itineraryId: string, subjectId: string, subjectType: string): Observable<AffiliatePartnerTransportsResponse> {
    itineraryId = '5f5e23be306f344825352472';
    subjectId = '51a35e733052ab6bcca9d64a';
    subjectType = 'city';
    return this.httpClient.get<AffiliatePartnerTransportsResponse>(`/affiliate/partner-transports?itinerary-id=${itineraryId}&subject-id=${subjectId}&subject-type=${subjectType}`);
  }

  test() {
    console.log('test');
  }
}
