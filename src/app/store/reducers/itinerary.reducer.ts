import {
    ItineraryAction,
    ItineraryActionTypes
} from '../actions';
import { LoadItineraryFailureActionResponse, LoadItinerarySuccessActionResponse } from '../models';

export interface ItineraryState {
  data: LoadItinerarySuccessActionResponse,
  loading: boolean,
  error: LoadItineraryFailureActionResponse
}

const initialState: ItineraryState = {
  data: undefined,
  loading: false,
  error: undefined
};



export function ItineraryReducer(state: ItineraryState = initialState, action: ItineraryAction) {
  switch (action.type) {
    case ItineraryActionTypes.LOAD_ITINERARY:
      return {
          ...state,
          loading: true
      };
    case ItineraryActionTypes.LOAD_ITINERARY_SUCCESS:
      return {
          ...state,
          data: action.payload,
          loading: false
      }
    case ItineraryActionTypes.LOAD_ITINERARY_FAILURE:
      return {
          ...state,
          data: action.payload,
          loading: false
      }
    default:
      return state;
  }
}
