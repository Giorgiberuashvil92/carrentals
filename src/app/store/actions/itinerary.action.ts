import { Action } from '@ngrx/store';
import { FailureResponse, ItineraryResponse } from '../models';

export enum ItineraryActionTypes {
  LOAD_ITINERARY = '[ITINERARY] Load Itinerary',
  LOAD_ITINERARY_SUCCESS = '[ITINERARY] Load Itinerary Success',
  LOAD_ITINERARY_FAILURE = '[ITINERARY] Load Itinerary Failure',
  SET_DAY_INDEX = '[ITINERARY] Set Day Index',
  SET_TOUR_INDEX = '[ITINERARY] Set Tour Index',
  DELETE_TOUR = '[ITINERARY] Delete Tour',
  DELETE_TOUR_SUCCESS = '[ITINERARY] Delete Tour Failure',
  DELETE_TOUR_FAILURE = '[ITINERARY] Delete Tour Success',
}
export class LoadItineraryAction implements Action {
  readonly type = ItineraryActionTypes.LOAD_ITINERARY;

  constructor(public payload: string) {}
}

export class LoadItinerarySuccessAction implements Action {
    readonly type = ItineraryActionTypes.LOAD_ITINERARY_SUCCESS;

    constructor(public payload: ItineraryResponse) {}
}

export class LoadItineraryFailureAction implements Action {
    readonly type = ItineraryActionTypes.LOAD_ITINERARY_FAILURE;

    constructor(public payload: FailureResponse) {}
}

export class SetDayIndexAction implements Action {
  readonly type = ItineraryActionTypes.SET_DAY_INDEX;

  constructor(public payload: number) {}
}

export class SetTourIndexAction implements Action {
  readonly type = ItineraryActionTypes.SET_TOUR_INDEX;

  constructor(public payload: number) {}
}

export class DeleteTourAction implements Action {
  readonly type = ItineraryActionTypes.DELETE_TOUR;

  constructor(public itineraryId: string, public id: string) {}
}

export class DeleteTourSuccessAction implements Action {
    readonly type = ItineraryActionTypes.DELETE_TOUR_SUCCESS;

    constructor(public payload: ItineraryResponse) {}
}

export class DeleteTourFailureAction implements Action {
    readonly type = ItineraryActionTypes.DELETE_TOUR_FAILURE;

    constructor(public payload: FailureResponse) {}
}


export type ItineraryAction =
    LoadItineraryAction |
    LoadItinerarySuccessAction |
    LoadItineraryFailureAction |
    SetDayIndexAction |
    SetTourIndexAction |
    DeleteTourAction |
    DeleteTourSuccessAction |
    DeleteTourFailureAction
