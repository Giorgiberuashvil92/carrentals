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

  updateItineraryLoading

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>,
    private itineraryService: ItineraryService
  ) { }

  ngOnInit(): void {
    this.itineraryStateSub = this.store.select(store => store.itinerary).subscribe(res => {
      this.itineraryState = res;
      if(this.updateItineraryLoading && !this.itineraryState.updateItineraryLoading) {
        this.updateItineraryLoading = false;
        if(!this.itineraryState.updateItineraryError) {
          this.dialogService.closeDialog();
        } else {
          this.dialogService.updateSize(this.dialogService.dialogMap[this.dialogService.currentDialogName].maxWidth);
        }
      }
    });
    this.itineraryService.daysObj = {
      old: [],
      new: []
    }
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
      const addedDaysNum: number = daysArr.reduce((a, b) => {
        if(b['_destroy']) return a-1;
        else if(!b.id) return a+1;
        return a;
      }, 0);
      const endDate = new Date(this.itineraryState.data.data.attributes["end-date"]);
      endDate.setDate(endDate.getDate() + addedDaysNum);
      this.itineraryService.daysObj.new = [];
      this.store.dispatch(new UpdateItineraryAction({ 
        itineraryId: this.itineraryState.data.data.id,
        body: {
          type: 'itineraries',
          attributes: {
            "start-date": this.itineraryState.data.data.attributes["start-date"],
            "end-date": `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`,
            // "end-date": "2000-10-10",
            days: daysArr
          }
        }
      }));
      this.updateItineraryLoading = true;
      this.dialogService.updateSize('250px');
    }, 0);
  }

  ngOnDestroy() {
    if(this.itineraryStateSub) this.itineraryStateSub.unsubscribe();
  }
}
