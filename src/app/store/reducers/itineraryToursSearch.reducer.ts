import { ItinerarToursSearchAction, ItineraryToursSearchActionTypes } from '../actions/itineraryToursSearch.action';

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

export function ItineraryToursSearchReducer(state: ItineraryState = initialState, action: ItinerarToursSearchAction) {
  switch (action.type) {
    case ItineraryToursSearchActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SEARCH:
      return {
          ...state,
          itineraryId:action.itineraryId,

      };
      case ItineraryToursSearchActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SEARCH_SUCCESS:
      return {
          ...state,
          data: action.payload,
          loading: false
      }
    case ItineraryToursSearchActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SEARCH_FAILURE:
      return {
          ...state,
          data: action.payload,
          loading: false
      }
    default:
      return state;
  }
}
