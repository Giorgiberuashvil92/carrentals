import { Action } from '@ngrx/store';
import { 
    AffiliatePartnerActivitiesResponse, FailureResponse
} from '../models';

export enum AffiliateActionTypes {
  LOAD_AFFILIATE_PARTNER_ACTIVITIES = '[AFFILIATE] Load Affiliate Partner Activities',
  LOAD_AFFILIATE_PARTNER_ACTIVITIES_SUCCESS = '[AFFILIATE] Load Affiliate Partner Activities Success',
  LOAD_AFFILIATE_PARTNER_ACTIVITIES_FAILURE = '[AFFILIATE] Load Affiliate Partner Activities Failure',
}

export class LoadAffiliatePartnerActivitiesAction implements Action {
    readonly type = AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES;

    constructor(public payload: string) {}
}

export class LoadAffiliatePartnerActivitiesSuccessAction implements Action {
    readonly type = AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_SUCCESS;

    constructor(public payload: AffiliatePartnerActivitiesResponse) {}
}

export class LoadAffiliatePartnerActivitiesFailureAction implements Action {
    readonly type = AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_FAILURE;

    constructor(public payload: FailureResponse) {}
}


export type AffiliateAction =
    LoadAffiliatePartnerActivitiesAction |
    LoadAffiliatePartnerActivitiesSuccessAction |
    LoadAffiliatePartnerActivitiesFailureAction
