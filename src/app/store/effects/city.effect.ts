import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { CityService } from 'src/app/core/services/city.service';
import { CityActionTypes, LoadCitiesAction, LoadCitiesFailureAction, LoadCitiesSuccessAction } from '../actions';

@Injectable()
export class CityEffects {

    constructor(
      private actions$: Actions,
      private cityService: CityService
    ) { }

    @Effect() loadCities$ = this.actions$
    .pipe(
        ofType<LoadCitiesAction>(CityActionTypes.LOAD_CITIES),
        mergeMap(
        () => this.cityService.getCities$()
            .pipe(
            map(data => {
                return new LoadCitiesSuccessAction(data)
            }),
            catchError(error => of(new LoadCitiesFailureAction(error)))
            )
        ),
    )
}
