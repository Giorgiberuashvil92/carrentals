import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/core/services/dialog.service';
import { AppState } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-arrive-day',
  templateUrl: './arrive-day.component.html',
  styleUrls: ['./arrive-day.component.scss']
})
export class ArriveDayComponent implements OnInit, OnDestroy {

  activities = [
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      isSelfGuided: true,
      tags: ["FISHERMAN'S BASTION", "PLACEHOLDER"]
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      isSelfGuided: true,
      tags: ["FISHERMAN'S BASTION", "PLACEHOLDER"]
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      isSelfGuided: true,
      tags: ["FISHERMAN'S BASTION", "PLACEHOLDER"]
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      isSelfGuided: true,
      tags: ["FISHERMAN'S BASTION", "PLACEHOLDER"]
    }
  ]

  currentIndex = 0;

  days1 = [
    {
      num: 1,
      name: 'FRI',
      dd: 25,
      month: 'AUG',
      fill: 2,
      hasX: false
    },
    {
      num: 2,
      name: 'FRI',
      dd: 26,
      month: 'AUG',
      fill: 2,
      hasX: true
    },
    {
      num: 3,
      name: 'FRI',
      dd: 27,
      month: 'AUG',
      fill: 2,
      hasX: true
    },
    {
      num: 4,
      name: 'FRI',
      dd: 28,
      month: 'AUG',
      fill: 2,
      hasX: true
    },
    {
      num: 5,
      name: 'FRI',
      dd: 29,
      month: 'AUG',
      fill: 1,
      hasX: false
    }
  ]

  days2 = [
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

  itineraryState: ItineraryState;
  itineraryStateSub: Subscription;

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.itineraryStateSub = this.store.select(store => store.itinerary).subscribe(res => {
      this.itineraryState = res;
    });
  }

  ngOnDestroy() {
    if(this.itineraryStateSub) this.itineraryStateSub.unsubscribe();
  }
}
