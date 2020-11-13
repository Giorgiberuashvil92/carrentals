import { Action } from '@ngrx/store';
import { FailureResponse, ItineraryAlternateToursResponse, ItineraryResponse, UpdateItineraryTourOrTransportResponse } from '../models';

export enum ItineraryActionTypes {
  LOAD_ITINERARY = '[ITINERARY] Load Itinerary',
  LOAD_ITINERARY_SUCCESS = '[ITINERARY] Load Itinerary Success',
  LOAD_ITINERARY_FAILURE = '[ITINERARY] Load Itinerary Failure',
  SET_DAY_INDEX = '[ITINERARY] Set Day Index',
  SET_TOUR_INDEX = '[ITINERARY] Set Tour Index',
  SET_TOUR = '[ITINERARY] Set Tour',
  DELETE_TOUR = '[ITINERARY] Delete Tour',
  DELETE_TOUR_SUCCESS = '[ITINERARY] Delete Tour Failure',
  DELETE_TOUR_FAILURE = '[ITINERARY] Delete Tour Success',
  LOAD_ITINERARY_ALTERNATE_TOURS = '[ITINERARY] Load Itinerary Alternate Tours',
  LOAD_ITINERARY_ALTERNATE_TOURS_SUCCESS = '[ITINERARY] Load Itinerary Alternate Tours Success',
  LOAD_ITINERARY_ALTERNATE_TOURS_FAILURE = '[ITINERARY] Load Itinerary Alternate Tours Failure',
  UPDATE_ITINERARY_TOUR_OR_TRANSPORT = '[ITINERARY] Update Itinerary Tour Or Transport',
  UPDATE_ITINERARY_TOUR_OR_TRANSPORT_SUCCESS = '[ITINERARY] Update Itinerary Tour Or Transport Success',
  UPDATE_ITINERARY_TOUR_OR_TRANSPORT_FAILURE = '[ITINERARY] Update Itinerary Tour Or Transport Failure'
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

export class SetTourAction implements Action {
  readonly type = ItineraryActionTypes.SET_TOUR;

  constructor(public payload: any) {}
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

export class LoadItineraryAlternateToursAction implements Action {
  readonly type = ItineraryActionTypes.LOAD_ITINERARY_ALTERNATE_TOURS;

  constructor(public payload: { itineraryId: string; id: string }) {}
}

export class LoadItineraryAlternateToursySuccessAction implements Action {
    readonly type = ItineraryActionTypes.LOAD_ITINERARY_ALTERNATE_TOURS_SUCCESS;

    constructor(public payload: ItineraryAlternateToursResponse) {}
}

export class LoadItineraryAlternateToursFailureAction implements Action {
    readonly type = ItineraryActionTypes.LOAD_ITINERARY_ALTERNATE_TOURS_FAILURE;

    constructor(public payload: FailureResponse) {}
}

export class UpdateItineraryTourOrTransportAction implements Action {
  readonly type = ItineraryActionTypes.UPDATE_ITINERARY_TOUR_OR_TRANSPORT;

  constructor(public payload: { 
    itineraryId: string;
    id: string;
    body: {
      type: string; 
      attributes: { 
        'solution-type': string; 
        'solution-id': string; 
      }
    }
  }) {}
}

export class UpdateItineraryTourOrTransportSuccessAction implements Action {
    readonly type = ItineraryActionTypes.UPDATE_ITINERARY_TOUR_OR_TRANSPORT_SUCCESS;

    constructor(public payload: UpdateItineraryTourOrTransportResponse) {}
}

export class UpdateItineraryTourOrTransportFailureAction implements Action {
    readonly type = ItineraryActionTypes.UPDATE_ITINERARY_TOUR_OR_TRANSPORT_FAILURE;

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
    DeleteTourFailureAction |
    LoadItineraryAlternateToursAction |
    LoadItineraryAlternateToursySuccessAction |
    LoadItineraryAlternateToursFailureAction |
    UpdateItineraryTourOrTransportAction |
    UpdateItineraryTourOrTransportSuccessAction |
    UpdateItineraryTourOrTransportFailureAction |
    SetTourAction
