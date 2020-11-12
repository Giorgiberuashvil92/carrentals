import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogService } from 'src/app/core/services/dialog.service';
import { AppState, ItineraryAlternateToursResponse } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-change-activity',
  templateUrl: './change-activity.component.html',
  styleUrls: ['./change-activity.component.scss']
})
export class ChangeActivityComponent implements OnInit {

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
  itineraryState$: Observable<ItineraryState>;

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.itineraryState$ = this.store.select(store => store.itinerary);
  }

  onOK(alternateTour: any) {
    console.log(alternateTour);
  }
}
