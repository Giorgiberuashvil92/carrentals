import { Action } from '@ngrx/store';

export enum ItineraryAlternateToursActionTypes {
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR = '[ITINERARY] Show Alternative Solutions For Specific Tour',
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SUCCESS = '[ITINERARY] Show Alternative Solutions For Specific Tour Succes',
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_FAILURE = '[ITINERARY] Show Alternative Solutions For Specific Tour Failure',
}
export enum parInterface {
  itineraryId
}

export class ShowAlternateSolutionsForSpecificTour implements Action {
  readonly type = ItineraryAlternateToursActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR;
  constructor(public itineraryId:string, public id:string) {}
}

export class ShowAlternateSolutionsForSpecificTourSuccess implements Action {
  readonly type = ItineraryAlternateToursActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SUCCESS;

  constructor(public payload: any) {}
}

export class ShowAlternateSolutionsForSpecificTourFailure implements Action {
  readonly type = ItineraryAlternateToursActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_FAILURE;

  constructor(public payload: Error) {}
}

export type ItineraryAlternateToursAction =
    ShowAlternateSolutionsForSpecificTour |
    ShowAlternateSolutionsForSpecificTourSuccess |
    ShowAlternateSolutionsForSpecificTourFailure
