import {
    ItineraryAction,
    ItineraryActionTypes
} from '../actions';

export interface ItineraryState {
    data: any,
    loading: boolean,
    error: Error
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
