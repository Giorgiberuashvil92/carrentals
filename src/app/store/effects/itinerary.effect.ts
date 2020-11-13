import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import { of } from 'rxjs';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { LoadAffiliatePartnerActivitiesFailureAction, DeleteTourAction, DeleteTourFailureAction, DeleteTourSuccessAction, ItineraryActionTypes, LoadItineraryAction, LoadItineraryAlternateToursAction, LoadItineraryAlternateToursySuccessAction, LoadItineraryFailureAction, LoadItinerarySuccessAction, UpdateItineraryTourOrTransportAction, UpdateItineraryTourOrTransportFailureAction, UpdateItineraryTourOrTransportSuccessAction, LoadItineraryToursSearchAction, LoadItineraryToursSearchSuccessAction, LoadItineraryToursSearchFailureAction } from '../actions';

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
        (d) => this.itineraryService.getItinerary$(d.payload)
            .pipe(
            map(data => {
                return new LoadItinerarySuccessAction(data)
            }),
            catchError(error => of(new LoadItineraryFailureAction(error)))
            )
        ),
    )

    @Effect() deleteTour$ = this.actions$
    .pipe(
        ofType<DeleteTourAction>(ItineraryActionTypes.DELETE_TOUR),
        mergeMap(
        (d) => this.itineraryService.deleteTour$(d.itineraryId, d.id)
            .pipe(
            map(data => {
                return new DeleteTourSuccessAction(data)
            }),
            catchError(error => of(new DeleteTourFailureAction(error)))
            )
        ),
    )

    @Effect() loadItineraryAlternateTours$ = this.actions$
    .pipe(
        ofType<LoadItineraryAlternateToursAction>(ItineraryActionTypes.LOAD_ITINERARY_ALTERNATE_TOURS),
        mergeMap(
        (d) => this.itineraryService.getItineraryAlternateTours$(d.payload.itineraryId, d.payload.id)
            .pipe(
            map(data => {
                return new LoadItineraryAlternateToursySuccessAction(data)
            }),
            catchError(error => of(new LoadAffiliatePartnerActivitiesFailureAction(error)))
            )
        ),
    )

    @Effect() updateItineraryTourOrTransport$ = this.actions$
    .pipe(
        ofType<UpdateItineraryTourOrTransportAction>(ItineraryActionTypes.UPDATE_ITINERARY_TOUR_OR_TRANSPORT),
        mergeMap(
        (d) => this.itineraryService.updateItineraryTourOrTransport$(d.payload.itineraryId, d.payload.id, d.payload.body)
            .pipe(
            map(data => {
                return new UpdateItineraryTourOrTransportSuccessAction(data)
            }),
            catchError(error => of(new UpdateItineraryTourOrTransportFailureAction(error)))
            )
        ),
    )

    @Effect() loadItineraryToursSearch$ = this.actions$
    .pipe(
        ofType<LoadItineraryToursSearchAction>(ItineraryActionTypes.LOAD_TOURS_SEARCH),
        switchMap(
        (d) => this.itineraryService.getItineraryToursSearch$(d.payload.itineraryId, d.payload.interestIds)
            .pipe(
            map(data => {
                return new LoadItineraryToursSearchSuccessAction(data)
            }),
            catchError(error => of(new LoadItineraryToursSearchFailureAction(error)))
            )
        ),
    )
}
