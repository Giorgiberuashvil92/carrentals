import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { ItineraryAlternateToursActionTypes, ShowAlternateSolutionsForSpecificTour, ShowAlternateSolutionsForSpecificTourFailure, ShowAlternateSolutionsForSpecificTourSuccess } from '../actions/itineraryAlternateTours.action';

@Injectable()
export class ItineraryAlternateToursEffects {

    constructor(
      private actions$: Actions,
      private itineraryService: ItineraryService
    ) { }

    @Effect() loadTours$ = this.actions$
    .pipe(
      ofType<ShowAlternateSolutionsForSpecificTour>(ItineraryAlternateToursActionTypes.SHOW_ALTERNATE_SOLUTIONS_FOR_SPECIFIC_TOUR),
        mergeMap(
        (d) => this.itineraryService.getItineraryAlternateTours(d.itineraryId,d.id)
            .pipe(
            map(data => {
                return new ShowAlternateSolutionsForSpecificTourSuccess(data)
            }),
            catchError(error => of(new ShowAlternateSolutionsForSpecificTourFailure(error)))
            )
        ),

    )

}
