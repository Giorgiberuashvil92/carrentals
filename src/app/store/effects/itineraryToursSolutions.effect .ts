import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { ItineraryToursSolutionsActionTypes, ShowAlternateSolutionsForSpecificTourSolutionsAction, ShowAlternateSolutionsForSpecificTourSolutionsFailureAction, ShowAlternateSolutionsForSpecificTourSolutionsSuccessAction } from '../actions/itineraryToursSolutions.action';

@Injectable()
export class ItineraryToursSolutionsEffects {

    constructor(
      private actions$: Actions,
      private itineraryService: ItineraryService
    ) { }

    @Effect() loadTours$ = this.actions$
    .pipe(
      ofType<ShowAlternateSolutionsForSpecificTourSolutionsAction>(ItineraryToursSolutionsActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR_SOLUTIONS),
        mergeMap(
        (d) => this.itineraryService.getItinerarySolutions(d.itineraryId)
            .pipe(
            map(data => {
                return new ShowAlternateSolutionsForSpecificTourSolutionsSuccessAction(data)
            }),
            catchError(error => of(new ShowAlternateSolutionsForSpecificTourSolutionsFailureAction(error)))
            )
        ),

    )

}
