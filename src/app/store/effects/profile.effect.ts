import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { ProfileService } from 'src/app/core/services/profile.service';
import { ProfileActionTypes } from '../actions';
import { LoadProfileAction, LoadProfileFailureAction, LoadProfileSuccessAction } from '../actions/profile.action';

@Injectable()
export class ProfileEffects {

    constructor(
      private actions$: Actions,
      private profileService: ProfileService
    ) { }

    @Effect() loadProfile$ = this.actions$
    .pipe(
        ofType<LoadProfileAction>(ProfileActionTypes.LOAD_PROFILE),
        mergeMap(
        (d) => this.profileService.getProfile()
            .pipe(
            map(data => {
                return new LoadProfileSuccessAction(data)
            }),
            catchError(error => of(new LoadProfileFailureAction(error)))
            )
        ),
    )

}
