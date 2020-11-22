import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { AffiliateService } from 'src/app/core/services/affiliate.service';
import { AffiliateActionTypes, LoadAffiliatePartnerActivitiesAction, LoadAffiliatePartnerActivitiesFailureAction, LoadAffiliatePartnerActivitiesLiveSearchAction, LoadAffiliatePartnerActivitiesLiveSearchFailureAction, LoadAffiliatePartnerActivitiesLiveSearchSuccessAction, LoadAffiliatePartnerActivitiesSuccessAction } from '../actions';

@Injectable()
export class AffiliateEffects {

    constructor(
      private actions$: Actions,
      private affiliateService: AffiliateService
    ) { }

    @Effect() loadAffiliatePartnerActivities$ = this.actions$
    .pipe(
        ofType<LoadAffiliatePartnerActivitiesAction>(AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES),
        mergeMap(
        (d) => this.affiliateService.getAffiliatePartnerActivities$(d.payload)
            .pipe(
            map(data => {
                return new LoadAffiliatePartnerActivitiesSuccessAction(data)
            }),
            catchError(error => of(new LoadAffiliatePartnerActivitiesFailureAction(error)))
            )
        ),
    )

    @Effect() loadAffiliatePartnerActivitiesLiveSearch$ = this.actions$
    .pipe(
        ofType<LoadAffiliatePartnerActivitiesLiveSearchAction>(AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_LIVE_SEARCH),
        mergeMap(
        (d) => this.affiliateService.getAffiliatePartnerActivitiesLiveSearch$(d.payload.cityId, d.payload.activityTypeIds, d.payload.text)
            .pipe(
            map(data => {
                return new LoadAffiliatePartnerActivitiesLiveSearchSuccessAction(data)
            }),
            catchError(error => of(new LoadAffiliatePartnerActivitiesLiveSearchFailureAction(error)))
            )
        ),
    )
}
