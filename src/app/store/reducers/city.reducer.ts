import { CityAction, CityActionTypes } from '../actions';
import { CitiesResponse } from '../models';

export interface CityState {
  cities: CitiesResponse,
  loading: boolean,
  error: Error
}

const initialState: CityState = {
    cities: undefined,
  loading: false,
  error: undefined
};



export function CityReducer(state: CityState = initialState, action: CityAction) {
  switch (action.type) {
    case CityActionTypes.LOAD_CITIES:
      return {
          ...state,
          loading: true
      };
    case CityActionTypes.LOAD_CITIES_SUCCESS:
      return {
          ...state,
          cities: action.payload,
          loading: false
      }
    case CityActionTypes.LOAD_CITIES_FAILURE:
      return {
          ...state,
          data: action.payload,
          loading: false
      }
    default:
      return state;
  }
}
