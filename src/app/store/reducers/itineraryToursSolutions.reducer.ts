import { ItinerarToursSolutionsAction, ItineraryToursSolutionsActionTypes } from '../actions/itineraryToursSolutions.action';

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

export function ItineraryToursSolutionsReducer(state: ItineraryState = initialState, action: ItinerarToursSolutionsAction) {
  switch (action.type) {
    case ItineraryToursSolutionsActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SOLUTIONS:
      return {
          ...state,
          itineraryId:action.itineraryId,

      };
      case ItineraryToursSolutionsActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SOLUTIONS_SUCCESS:
      return {
          ...state,
          data: action.payload,
          loading: false
      }
    case ItineraryToursSolutionsActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SOLUTIONS_FAILURE:
      return {
          ...state,
          data: action.payload,
          loading: false
      }
    default:
      return state;
  }
}
