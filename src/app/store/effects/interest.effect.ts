import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { InterestService } from 'src/app/core/services/interest.service';
import { InterestActionTypes, LoadInterestsAction, LoadInterestsFailureAction, LoadInterestsSuccessAction } from '../actions';

@Injectable()
export class InterestEffects {

    constructor(
      private actions$: Actions,
      private interestService: InterestService
    ) { }

    @Effect() loadInterests$ = this.actions$
    .pipe(
        ofType<LoadInterestsAction>(InterestActionTypes.LOAD_INTERESTS),
        mergeMap(
        () => this.interestService.getInterests$()
            .pipe(
            map(data => {
                return new LoadInterestsSuccessAction(data)
            }),
            catchError(error => of(new LoadInterestsFailureAction(error)))
            )
        ),
    )
}
