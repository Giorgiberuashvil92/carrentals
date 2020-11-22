import { AffiliateAction, AffiliateActionTypes } from '../actions';
import { AffiliatePartnerActivitiesLiveSearchResponse, AffiliatePartnerActivitiesResponse, FailureResponse } from '../models';

export interface AffiliateState {
    partnerActivities: AffiliatePartnerActivitiesResponse,
    partnerActivitiesLoading: boolean,
    partnerActivitiesError: FailureResponse
    partnerActivitiesLiveSearch: AffiliatePartnerActivitiesLiveSearchResponse,
    partnerActivitiesLiveSearchLoading: boolean,
    partnerActivitiesLiveSearchError: FailureResponse
}

const initialState: AffiliateState = {
    partnerActivities: undefined,
    partnerActivitiesLoading: false,
    partnerActivitiesError: undefined,
    partnerActivitiesLiveSearch: undefined,
    partnerActivitiesLiveSearchLoading: false,
    partnerActivitiesLiveSearchError: undefined
};



export function AffiliateReducer(state: AffiliateState = initialState, action: AffiliateAction) {
    switch (action.type) {
        case AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES:
            return {
                ...state,
                partnerActivitiesLoading: true
            };
        case AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_SUCCESS:
            return {
                ...state,
                partnerActivities: action.payload,
                partnerActivitiesError: null,
                partnerActivitiesLoading: false
            }
        case AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_FAILURE:
            return {
                ...state,
                partnerActivitiesError: action.payload,
                partnerActivitiesLoading: false
            }
        case AffiliateActionTypes.SET_AFFILIATE_PARTNER_ACTIVITES:
            return {
                ...state,
                partnerActivitiesLoading: false,
                partnerActivitiesError: null,
                partnerActivities: action.payload
            }
        case AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES:
            return {
                ...state,
                partnerActivitiesLiveSearchLoading: true
            };
        case AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_SUCCESS:
            return {
                ...state,
                partnerActivitiesLiveSearch: action.payload,
                partnerActivitiesLiveSearchError: null,
                partnerActivitiesLiveSearchLoading: false
            }
        case AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_FAILURE:
            return {
                ...state,
                partnerActivitiesLiveSearchError: action.payload,
                partnerActivitiesLiveSearchLoading: false
            }
        default:
            return state;
    }
}
