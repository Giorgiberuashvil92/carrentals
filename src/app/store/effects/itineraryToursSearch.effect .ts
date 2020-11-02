import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { ItineraryToursSearchActionTypes, ShowAlternateSolutionsForSpecificTourSearchAction, ShowAlternateSolutionsForSpecificTourSearchFailureAction, ShowAlternateSolutionsForSpecificTourSearchSuccessAction } from '../actions/itineraryToursSearch.action';
import { ItineraryService } from 'src/app/core/services/itinerary.service';

@Injectable()
export class ItineraryToursSearchEffects {

    constructor(
      private actions$: Actions,
      private itineraryService: ItineraryService
    ) { }

    @Effect() loadTours$ = this.actions$
    .pipe(
      ofType<ShowAlternateSolutionsForSpecificTourSearchAction>(ItineraryToursSearchActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SEARCH),
        mergeMap(
        (d) => this.itineraryService.getItineraryToursSearch(d.itineraryId)
            .pipe(
            map(data => {
                return new ShowAlternateSolutionsForSpecificTourSearchSuccessAction(data)
            }),
            catchError(error => of(new ShowAlternateSolutionsForSpecificTourSearchFailureAction(error)))
            )
        ),

    )

}
