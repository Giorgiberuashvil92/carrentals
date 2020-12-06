import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/core/services/dialog.service';
import { UpdateItineraryTourOrTransportAction } from 'src/app/store/actions';
import { AppState } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-change-transport',
  templateUrl: './change-transport.component.html',
  styleUrls: ['./change-transport.component.scss']
})
export class ChangeTransportComponent implements OnInit {

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
    this.dialogService.closeDialog();
    if(this.currentIndex === 0) {
      return;
    }

    if(itineraryState.alternateTours.data[this.currentIndex - 1].attributes.type === 'compadre') {
      this.store.dispatch(new UpdateItineraryTourOrTransportAction({
        itineraryId: itineraryState.data.data.id,
        id: itineraryState.tour.id,
        body: {
          type: 'tours',
          attributes: {
            "solution-type": 'compadre',
            "solution-id": itineraryState.alternateTours.data[this.currentIndex - 1].id
          }
        }
      }));
      this.dialogService.closeDialog();
    } else {
      this.dialogService.openDialog('editTrip', itineraryState.alternateTours.data[this.currentIndex - 1]);
    }
  }
}
