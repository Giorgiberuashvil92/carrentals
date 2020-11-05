import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LocationPaginator } from 'src/app/core/models/location-paginator.model';
import { DeviceDetectorService } from 'src/app/core/services/device-detector.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { LoadItineraryAction } from 'src/app/store/actions/itinerary.action';
import { AppState } from 'src/app/store/models/app-state.model';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-all-my-trips',
  templateUrl: './all-my-trips.component.html',
  styleUrls: ['./all-my-trips.component.scss']
})
export class AllMyTripsComponent implements OnInit {

  locationsToVisit: string[] = ['Rome', 'Paris', 'Prague'];
  tripTime: number = 10;

  location: string = 'Prague';
  date: string = 'December 2, 2020';
  leftData = [
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Guided walking tour of the Royal Route',
      isSelfGuided: false,
      timeInterval: '9:00 AM - 12:30 PM'
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      isSelfGuided: true,
      timeInterval: 'Early Afternoon'
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'The Little Quarter',
      isSelfGuided: true,
      timeInterval: 'Late Afternoon'
    }
  ]
  leftItemActiveIndex: number = 0;
  itinerary$: Observable<ItineraryState>;


  constructor(
    public dialogService: DialogService,
    public deviceDetectorService: DeviceDetectorService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadItineraryAction('5f5e23be306f344825352472'));
    this.itinerary$ = this.store.select(store => store.itinerary);
  }

  onPageChange(page: number) {
    console.log(page);
  }

  onChange() {
    this.dialogService.openDialog('changeActivity');
  }
}
