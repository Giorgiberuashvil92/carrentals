import { Action } from '@ngrx/store';

export enum ItineraryActionTypes {
  LOAD_ITINERARY = '[ITINERARY] Load Itinerary',
  LOAD_ITINERARY_SUCCESS = '[ITINERARY] Load Itinerary Success',
  LOAD_ITINERARY_FAILURE = '[ITINERARY] Load Itinerary Failure',
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR = '[ITINERARY] Show Alternative Solutions For Specific Tour',
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SUCCESS = '[ITINERARY] Show Alternative Solutions For Specific Tour Succes',
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_FAILURE = '[ITINERARY] Show Alternative Solutions For Specific Tour Failure',
}
export class LoadItineraryAction implements Action {
  readonly type = ItineraryActionTypes.LOAD_ITINERARY;

  constructor(public payload: string) {}
}

export class LoadItinerarySuccessAction implements Action {
    readonly type = ItineraryActionTypes.LOAD_ITINERARY_SUCCESS;

    constructor(public payload: any) {}
}
export class LoadItineraryFailureAction implements Action {
    readonly type = ItineraryActionTypes.LOAD_ITINERARY_FAILURE;

    constructor(public payload: Error) {}
}


export type ItineraryAction =
    LoadItineraryAction |
    LoadItinerarySuccessAction |
    LoadItineraryFailureAction
