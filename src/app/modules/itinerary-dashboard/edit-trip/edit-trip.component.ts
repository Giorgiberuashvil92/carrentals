import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { UpdateItineraryTourOrTransportAction } from 'src/app/store/actions';
import { AppState } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.scss']
})
export class EditTripComponent implements OnInit {

  itineraryState$: Observable<ItineraryState>;

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>,
    public itineraryService: ItineraryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.itineraryState$ = this.store.select(store => store.itinerary);
  }

  onOK(itineraryState: ItineraryState) {
    this.store.dispatch(new UpdateItineraryTourOrTransportAction({
      itineraryId: itineraryState.data.data.id,
      id: itineraryState.tour.id,
      body: {
        type: 'tours',
        attributes: {
          "solution-type": 'component-group',
          "solution-id": this.data.id
        }
      }
    }));
    this.dialogService.closeDialog();
  }
}
