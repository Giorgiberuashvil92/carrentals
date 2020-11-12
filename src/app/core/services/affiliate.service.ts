import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AffiliatePartnerActivitiesResponse } from 'src/app/store/models';

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
}
