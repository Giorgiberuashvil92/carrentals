import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { ItineraryActionTypes, LoadItineraryAction, LoadItineraryFailureAction, LoadItinerarySuccessAction} from '../actions/itinerary.action';
import { ItineraryService } from 'src/app/core/services/itinerary.service';

@Injectable()
export class ItineraryEffects {

    constructor(
      private actions$: Actions,
      private itineraryService: ItineraryService
    ) { }

    @Effect() loadItinerary$ = this.actions$
    .pipe(
        ofType<LoadItineraryAction>(ItineraryActionTypes.LOAD_ITINERARY),
        mergeMap(
        (d) => this.itineraryService.getItinerary(d.payload,)
            .pipe(
            map(data => {
                return new LoadItinerarySuccessAction(data)
            }),
            catchError(error => of(new LoadItineraryFailureAction(error)))
            )
        ),
    )

}
