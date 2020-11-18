import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { UpdateItineraryAction } from 'src/app/store/actions';
import { AppState } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-arrive-day',
  templateUrl: './arrive-day.component.html',
  styleUrls: ['./arrive-day.component.scss']
})
export class ArriveDayComponent implements OnInit, OnDestroy {

  itineraryState: ItineraryState;
  itineraryStateSub: Subscription;

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>,
    private itineraryService: ItineraryService
  ) { }

  ngOnInit(): void {
    this.itineraryStateSub = this.store.select(store => store.itinerary).subscribe(res => {
      this.itineraryState = res;
    });
  }

  onOK() {
    this.itineraryService.editTripOKClicked.next(true);
    
    setTimeout(() => {
      let daysArr = [];
      this.itineraryService.daysObj.old = [...new Set(this.itineraryService.daysObj.old)];
      this.itineraryService.daysObj.new = [...new Set(this.itineraryService.daysObj.new)];
      for(let i=0; i<this.itineraryService.daysObj.old.length; i++) {
        if(!this.itineraryService.daysObj.new.find(r => r.id === this.itineraryService.daysObj.old[i].id)) {
          daysArr.push({
            id: this.itineraryService.daysObj.old[i].id,
            '_destroy': 1
          });
        }
      }
      for(let i=0; i<this.itineraryService.daysObj.new.length; i++) {
        if(this.itineraryService.daysObj.new[i].id === 'newDay') {
          daysArr.push({
            index: this.itineraryService.daysObj.new[i].attributes.index
          })
        } else {
          if(!daysArr.find(r => r.id === this.itineraryService.daysObj.new[i].id && !r['_destroy'])) {
            daysArr.push({
              id: this.itineraryService.daysObj.new[i].id,
              index: this.itineraryService.daysObj.new[i].attributes.index
            })
          }
        }
      }
      this.store.dispatch(new UpdateItineraryAction({ 
        itineraryId: this.itineraryState.data.data.id,
        body: {
          type: 'itineraries',
          attributes: {
            "start-date": this.itineraryState.data.data.attributes["start-date"],
            "end-date": this.itineraryState.data.data.attributes["end-date"],
            days: daysArr
          }
        }
      }));
      this.dialogService.closeDialog();
    }, 0);
  }

  ngOnDestroy() {
    if(this.itineraryStateSub) this.itineraryStateSub.unsubscribe();
  }
}
