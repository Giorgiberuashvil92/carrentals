import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DialogService } from 'src/app/core/services/dialog.service';
import { UpdateItineraryTourOrTransportAction } from 'src/app/store/actions';
import { AppState } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-change-activity',
  templateUrl: './change-activity.component.html',
  styleUrls: ['./change-activity.component.scss']
})
export class ChangeActivityComponent implements OnInit {

  currentIndex = 0;
  itineraryState$: Observable<ItineraryState>;

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.itineraryState$ = this.store.select(store => store.itinerary);
  }

  onOK(itineraryState: ItineraryState) {
    if(this.currentIndex === 0) {
      return;
    }
    if(itineraryState.alternateTours.data[this.currentIndex-1].attributes["transport-type"]) {
      this.dialogService.closeDialog();
      this.dialogService.openDialog('editTrip');
      return;
    }
    this.store.dispatch(new UpdateItineraryTourOrTransportAction({
      itineraryId: itineraryState.data.data.id,
      id: itineraryState.tour.id,
      body: {
        type: 'tours',
        attributes: {
          "solution-type": 'compadre',
          "solution-id": itineraryState.alternateTours.data[this.currentIndex-1].id
        }
      }
    }));
    this.dialogService.closeDialog();
  }
}
