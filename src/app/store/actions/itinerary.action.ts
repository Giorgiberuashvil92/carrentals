import { Action } from '@ngrx/store';
import { LoadItineraryFailureActionResponse, LoadItinerarySuccessActionResponse } from '../models';

export enum ItineraryActionTypes {
  LOAD_ITINERARY = '[ITINERARY] Load Itinerary',
  LOAD_ITINERARY_SUCCESS = '[ITINERARY] Load Itinerary Success',
  LOAD_ITINERARY_FAILURE = '[ITINERARY] Load Itinerary Failure',
  SET_DAY_INDEX = '[ITINERARY] Set Day Index',
  SET_TOUR_INDEX = '[ITINERARY] Set Tour Index'
}
export class LoadItineraryAction implements Action {
  readonly type = ItineraryActionTypes.LOAD_ITINERARY;

  constructor(public payload: string) {}
}

export class LoadItinerarySuccessAction implements Action {
    readonly type = ItineraryActionTypes.LOAD_ITINERARY_SUCCESS;

    constructor(public payload: LoadItinerarySuccessActionResponse) {}
}

export class LoadItineraryFailureAction implements Action {
    readonly type = ItineraryActionTypes.LOAD_ITINERARY_FAILURE;

    constructor(public payload: LoadItineraryFailureActionResponse) {}
}

export class SetDayIndexAction implements Action {
  readonly type = ItineraryActionTypes.SET_DAY_INDEX;

  constructor(public payload: number) {}
}

export class SetTourIndexAction implements Action {
  readonly type = ItineraryActionTypes.SET_TOUR_INDEX;

  constructor(public payload: number) {}
}


export type ItineraryAction =
    LoadItineraryAction |
    LoadItinerarySuccessAction |
    LoadItineraryFailureAction |
    SetDayIndexAction |
    SetTourIndexAction
