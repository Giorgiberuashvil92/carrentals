import {
    ItineraryAction,
    ItineraryActionTypes
} from '../actions';
import { FailureResponse, ItineraryAlternateToursResponse, ItineraryResponse } from '../models';

export interface ItineraryState {
  data: ItineraryResponse,
  loading: boolean,
  error: FailureResponse,
  dayIndex: number,
  tourIndex: number,
  alternateTours: ItineraryAlternateToursResponse
}

const initialState: ItineraryState = {
  data: undefined,
  loading: false,
  error: undefined,
  dayIndex: 1,
  tourIndex: 0,
  alternateTours: undefined
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
          alternateTours: { data: [] }
      }
    case ItineraryActionTypes.LOAD_ITINERARY_ALTERNATE_TOURS_SUCCESS:
      return {
          ...state,
          alternateTours: action.payload
      }
    case ItineraryActionTypes.LOAD_ITINERARY_ALTERNATE_TOURS_FAILURE:
      return {
          ...state
      }
    case ItineraryActionTypes.UPDATE_ITINERARY_TOUR_OR_TRANSPORT:
      return {
          ...state
      }
    case ItineraryActionTypes.UPDATE_ITINERARY_TOUR_OR_TRANSPORT_SUCCESS:
      return {
          ...state
      }
    case ItineraryActionTypes.UPDATE_ITINERARY_TOUR_OR_TRANSPORT_FAILURE:
      return {
          ...state
      }
    default:
      return state;
  }
}
