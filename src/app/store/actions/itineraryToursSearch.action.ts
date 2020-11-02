import { Action } from '@ngrx/store';

export enum ItineraryToursSearchActionTypes {
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SEARCH = '[ITINERARY] Show Alternative Solutions For Specific Tour',
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SEARCH_SUCCESS = '[ITINERARY] Show Alternative Solutions For Specific Tour Succes',
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SEARCH_FAILURE = '[ITINERARY] Show Alternative Solutions For Specific Tour Failure',
}

export class ShowAlternateSolutionsForSpecificTourSearchAction implements Action {
  readonly type = ItineraryToursSearchActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SEARCH;
  constructor(public itineraryId:string) {}
}

export class ShowAlternateSolutionsForSpecificTourSearchSuccessAction implements Action {
  readonly type = ItineraryToursSearchActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SEARCH_SUCCESS;

  constructor(public payload: any) {}
}

export class ShowAlternateSolutionsForSpecificTourSearchFailureAction implements Action {
  readonly type = ItineraryToursSearchActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SEARCH_FAILURE;

  constructor(public payload: Error) {}
}

export type ItinerarToursSearchAction =
    ShowAlternateSolutionsForSpecificTourSearchAction |
    ShowAlternateSolutionsForSpecificTourSearchSuccessAction |
    ShowAlternateSolutionsForSpecificTourSearchFailureAction
