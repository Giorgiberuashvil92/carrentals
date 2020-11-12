import { AffiliateAction, AffiliateActionTypes } from '../actions';
import { AffiliatePartnerActivitiesResponse, FailureResponse } from '../models';

export interface AffiliateState {
    partnerActivities: AffiliatePartnerActivitiesResponse,
    loading: boolean,
    error: FailureResponse
}

const initialState: AffiliateState = {
    partnerActivities: undefined,
    loading: false,
    error: undefined
};



export function AffiliateReducer(state: AffiliateState = initialState, action: AffiliateAction) {
    switch (action.type) {
        case AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES:
            return {
                ...state,
                loading: true
            };
        case AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_SUCCESS:
            return {
                ...state,
                partnerActivities: action.payload,
                error: null,
                loading: false
            }
        case AffiliateActionTypes.LOAD_AFFILIATE_PARTNER_ACTIVITIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
