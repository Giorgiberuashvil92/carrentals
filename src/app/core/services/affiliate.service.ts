import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AffiliatePartnerActivitiesLiveSearchResponse, AffiliatePartnerActivitiesResponse } from 'src/app/store/models';

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

  getAffiliatePartnerActivitiesLiveSearch$(cityId: string, activityTypeIds: string[], text: string): Observable<AffiliatePartnerActivitiesLiveSearchResponse> {
    return this.httpClient.get<AffiliatePartnerActivitiesLiveSearchResponse>(`/affiliate/partner-activities/live-search?city-id=${cityId}`);
  }

  test() {
    console.log('test');
  }
}
