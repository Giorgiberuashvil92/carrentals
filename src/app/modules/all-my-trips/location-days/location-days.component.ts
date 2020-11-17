import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { AppState } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-location-days',
  templateUrl: './location-days.component.html',
  styleUrls: ['./location-days.component.scss']
})
export class LocationDaysComponent implements OnInit, OnDestroy {

  days = [
    {
      num: 1,
      name: 'FRI',
      dd: 25,
      month: 'AUG',
      fill: 1,
      hasX: false
    },
    {
      num: 2,
      name: 'FRI',
      dd: 26,
      month: 'AUG',
      fill: 0,
      hasX: true
    },
    {
      num: 3,
      name: 'FRI',
      dd: 27,
      month: 'AUG',
      fill: 0,
      hasX: true
    },
    {
      num: 4,
      name: 'FRI',
      dd: 28,
      month: 'AUG',
      fill: 0,
      hasX: true
    },
    {
      num: 5,
      name: 'FRI',
      dd: 29,
      month: 'AUG',
      fill: 0,
      hasX: false
    }
  ]
  @Input() data: any;

  city: any;
  daysArr: any[];

  itineraryState: ItineraryState;
  itineraryStateSub: Subscription;

  constructor(
    private store: Store<AppState>,
    public itineraryService: ItineraryService
  ) { }

  ngOnInit(): void {
    this.itineraryStateSub = this.store.select(store => store.itinerary).subscribe(res => {
      this.itineraryState = res;
      this.city = this.itineraryService.findCityById(this.itineraryState, this.data.city.data.id);
      this.daysArr = this.data.days.data.map(d => this.itineraryService.findDayById(this.itineraryState, d.id));
      console.log(this.daysArr);
    });
  }

  ngOnDestroy() {
    if(this.itineraryStateSub) this.itineraryStateSub.unsubscribe();
  }
}
