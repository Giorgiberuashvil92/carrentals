import {
    ItineraryAction,
    ItineraryActionTypes
} from '../actions';
import { FailureResponse, ItineraryAlternateToursResponse, ItineraryResponse, ItinerarySolutionsForTourResponse, ItineraryToursSearchResponse, PostItinerarySolutionsForTourResponse } from '../models';

export interface ItineraryState {
  data: ItineraryResponse,
  loading: boolean,
  error: FailureResponse,
  dayIndex: number,
  tourIndex: number,
  tour: any,
  alternateTours: ItineraryAlternateToursResponse,
  alternateToursLoading: boolean,
  toursSearch: ItineraryToursSearchResponse,
  toursSearchLoading: boolean,
  tourSolutions: ItinerarySolutionsForTourResponse,
  tourSolutionPostResponse: PostItinerarySolutionsForTourResponse
}

const initialState: ItineraryState = {
  data: undefined,
  loading: false,
  error: undefined,
  dayIndex: 1,
  tourIndex: 0,
  tour: undefined,
  alternateTours: undefined,
  alternateToursLoading: false,
  toursSearch: undefined,
  toursSearchLoading: false,
  tourSolutions: undefined,
  tourSolutionPostResponse: undefined
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
          error: null,
          loading: false
      }
    case ItineraryActionTypes.LOAD_ITINERARY_FAILURE:
      return {
          ...state,
          error: action.payload,
          loading: false
      }
    case ItineraryActionTypes.SET_DAY_INDEX:
      return {
        ...state,
        dayIndex: action.payload
      }
    case ItineraryActionTypes.SET_TOUR_INDEX:
      return {
        ...state,
        tourIndex: action.payload
      }
    case ItineraryActionTypes.SET_TOUR:
      return {
        ...state,
        tour: action.payload
      }
    case ItineraryActionTypes.DELETE_TOUR:
      return {
          ...state
      };
    case ItineraryActionTypes.DELETE_TOUR_SUCCESS:
      return {
          ...state,
          data: action.payload
      }
    case ItineraryActionTypes.DELETE_TOUR_FAILURE:
      return {
          ...state
      }
    case ItineraryActionTypes.LOAD_ITINERARY_ALTERNATE_TOURS:
      return {
          ...state,
          alternateTours: { data: [] },
          alternateToursLoading: true
      }
    case ItineraryActionTypes.LOAD_ITINERARY_ALTERNATE_TOURS_SUCCESS:
      return {
          ...state,
          alternateTours: action.payload,
          alternateToursLoading: false
      }
    case ItineraryActionTypes.LOAD_ITINERARY_ALTERNATE_TOURS_FAILURE:
      return {
          ...state,
          alternateToursLoading: false
      }
    case ItineraryActionTypes.UPDATE_ITINERARY_TOUR_OR_TRANSPORT:
      return {
          ...state
      }
    case ItineraryActionTypes.UPDATE_ITINERARY_TOUR_OR_TRANSPORT_SUCCESS:
      return {
          ...state,
          data: action.payload
      }
    case ItineraryActionTypes.UPDATE_ITINERARY_TOUR_OR_TRANSPORT_FAILURE:
      return {
          ...state
      }
    case ItineraryActionTypes.LOAD_TOURS_SEARCH:
      return {
          ...state,
          toursSearchLoading: true
      }
    case ItineraryActionTypes.LOAD_TOURS_SEARCH_SUCCESS:
      return {
          ...state,
          toursSearch: action.payload,
          toursSearchLoading: false
      }
    case ItineraryActionTypes.LOAD_TOURS_SEARCH_FAILURE:
      return {
          ...state,
          toursSearchLoading: false
      }
    case ItineraryActionTypes.SET_TOURS_SEARCH:
      return {
          ...state,
          toursSearch: action.payload
      }
    case ItineraryActionTypes.LOAD_TOURS_SOLUTIONS_FOR_TOUR:
      return {
          ...state
      }
    case ItineraryActionTypes.LOAD_TOURS_SOLUTIONS_FOR_TOUR_SUCCESS:
      return {
          ...state,
          tourSolutions: action.payload
      }
    case ItineraryActionTypes.LOAD_TOURS_SOLUTIONS_FOR_TOUR_FAILURE:
      return {
          ...state
      }
    case ItineraryActionTypes.POST_TOURS_SOLUTION_FOR_TOUR:
      return {
          ...state,
          tourSolutionPostResponse: undefined
      }
    case ItineraryActionTypes.POST_TOURS_SOLUTION_FOR_TOUR_SUCCESS:
      return {
          ...state,
          tourSolutionPostResponse: action.payload
      }
    case ItineraryActionTypes.POST_TOURS_SOLUTION_FOR_TOUR_FAILURE:
      return {
          ...state
      }
    case ItineraryActionTypes.UPDATE_ITINERARY:
      return {
          ...state,
          loading: true
      }
    case ItineraryActionTypes.UPDATE_ITINERARY_SUCCESS:
      return {
          ...state,
          data: action.payload,
          error: null,
          loading: false
      }
    case ItineraryActionTypes.UPDATE_ITINERARY_FAILURE:
      return {
          ...state,
          error: action.payload,
          loading: false
      }
    default:
      return state;
  }
}
