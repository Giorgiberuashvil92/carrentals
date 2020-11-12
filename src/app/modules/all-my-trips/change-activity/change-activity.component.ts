import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
    this.itineraryState$ = this.store.select(store => store.itinerary);
  }

  onOK(itineraryState: ItineraryState) {
    console.log(itineraryState);
    this.store.dispatch(new UpdateItineraryTourOrTransportAction({
      itineraryId: itineraryState.data.data.id,
      id: this.data,
      body: {
        type: 'tours',
        attributes: {
          "solution-type": itineraryState.alternateTours.data[this.currentIndex].attributes.type,
          "solution-id": itineraryState.alternateTours.data[this.currentIndex].id
        }
      }
    }));
    this.dialogService.closeDialog();
  }
}
