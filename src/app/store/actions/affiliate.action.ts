import { Action } from '@ngrx/store';
import { 
    AffiliatePartnerActivitiesLiveSearchResponse,
    AffiliatePartnerActivitiesResponse, FailureResponse
} from '../models';

export enum AffiliateActionTypes {
  LOAD_AFFILIATE_PARTNER_ACTIVITIES = '[AFFILIATE] Load Affiliate Partner Activities',
  LOAD_AFFILIATE_PARTNER_ACTIVITIES_SUCCESS = '[AFFILIATE] Load Affiliate Partner Activities Success',
  LOAD_AFFILIATE_PARTNER_ACTIVITIES_FAILURE = '[AFFILIATE] Load Affiliate Partner Activities Failure',
  SET_AFFILIATE_PARTNER_ACTIVITES = '[AFFILIATE] Set Affiliate Partner Activities',
  LOAD_AFFILIATE_PARTNER_ACTIVITIES_LIVE_SEARCH = '[AFFILIATE] Load Affiliate Partner Activities Live Search',
  LOAD_AFFILIATE_PARTNER_ACTIVITIES_LIVE_SEARCH_SUCCESS = '[AFFILIATE] Load Affiliate Partner Activities Live Search Success',
  LOAD_AFFILIATE_PARTNER_ACTIVITIES_LIVE_SEARCH_FAILURE = '[AFFILIATE] Load Affiliate Partner Activities Live Search Failure'
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

export class SetAffiliatePartnerActivitiesAction implements Action {
    readonly type = AffiliateActionTypes.SET_AFFILIATE_PARTNER_ACTIVITES;

    constructor(public payload: AffiliatePartnerActivitiesResponse) {}
}

export class LoadAffiliatePartnerActivitiesLiveSearchAction implements Action {
    readonly type = AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_LIVE_SEARCH;

    constructor(public payload: {
        cityId: string;
        activityTypeIds: string[];
        text: string;
    }) {}
}

export class LoadAffiliatePartnerActivitiesLiveSearchSuccessAction implements Action {
    readonly type = AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_LIVE_SEARCH_SUCCESS;

    constructor(public payload: AffiliatePartnerActivitiesLiveSearchResponse) {}
}

export class LoadAffiliatePartnerActivitiesLiveSearchFailureAction implements Action {
    readonly type = AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_LIVE_SEARCH_FAILURE;

    constructor(public payload: FailureResponse) {}
}


export type AffiliateAction =
    LoadAffiliatePartnerActivitiesAction |
    LoadAffiliatePartnerActivitiesSuccessAction |
    LoadAffiliatePartnerActivitiesFailureAction |
    SetAffiliatePartnerActivitiesAction |
    LoadAffiliatePartnerActivitiesLiveSearchAction |
    LoadAffiliatePartnerActivitiesLiveSearchSuccessAction |
    LoadAffiliatePartnerActivitiesLiveSearchFailureAction
