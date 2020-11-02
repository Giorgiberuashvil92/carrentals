import {
    ItineraryAlternateToursAction,
    ItineraryAlternateToursActionTypes
} from '../actions';

export interface ItineraryState {
    itineraryId: any,
    id: any,
    error: Error
  }

  const initialState: ItineraryState = {
    itineraryId: undefined,
    id: false,
    error: undefined
  };

export function ItineraryAlternateToursReducer(state: ItineraryState = initialState, action: ItineraryAlternateToursAction) {
  switch (action.type) {
    case ItineraryAlternateToursActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR:
      return {
          ...state,
          itineraryId:action.itineraryId,
          id:action.id,

      };
      case ItineraryAlternateToursActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SUCCESS:
      return {
          ...state,
          data: action.payload,
          loading: false
      }
    case ItineraryAlternateToursActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_FAILURE:
      return {
          ...state,
          data: action.payload,
          loading: false
      }
    default:
      return state;
  }
}
