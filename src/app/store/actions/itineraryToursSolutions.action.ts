import { Action } from '@ngrx/store';

export enum ItineraryToursSolutionsActionTypes {
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SOLUTIONS = '[ITINERARY] Show Alternative Solutions For Specific Tour',
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SOLUTIONS_SUCCESS = '[ITINERARY] Show Alternative Solutions For Specific Tour Succes',
  SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SOLUTIONS_FAILURE = '[ITINERARY] Show Alternative Solutions For Specific Tour Failure',
}

export class ShowAlternateSolutionsForSpecificTourSolutionsAction implements Action {
  readonly type = ItineraryToursSolutionsActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SOLUTIONS;
  constructor(public itineraryId:string) {}
}

export class ShowAlternateSolutionsForSpecificTourSolutionsSuccessAction implements Action {
  readonly type = ItineraryToursSolutionsActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SOLUTIONS_SUCCESS;

  constructor(public payload: any) {}
}

export class ShowAlternateSolutionsForSpecificTourSolutionsFailureAction implements Action {
  readonly type = ItineraryToursSolutionsActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SOLUTIONS_FAILURE;

  constructor(public payload: Error) {}
}

export type ItinerarToursSolutionsAction =
    ShowAlternateSolutionsForSpecificTourSolutionsAction |
    ShowAlternateSolutionsForSpecificTourSolutionsSuccessAction |
    ShowAlternateSolutionsForSpecificTourSolutionsFailureAction
