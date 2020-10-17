import { Component, OnInit } from '@angular/core';
import { LocationPaginator } from 'src/app/core/models/location-paginator.model';

@Component({
  selector: 'app-all-my-trips',
  templateUrl: './all-my-trips.component.html',
  styleUrls: ['./all-my-trips.component.scss']
})
export class AllMyTripsComponent implements OnInit {

  locationsToVisit: string[] = ['Rome', 'Paris', 'Prague'];
  tripTime: number = 10;
  locationPaginatorData: LocationPaginator[] = [
    {
      firstData: '02/12/2020',
      secondData: 'Arrival',
      thirdData: '',
      icon: 'arrival-icon.svg'
    },
    {
      firstData: '3 DAYS',
      secondData: 'Rome',
      thirdData: 'Italy',
      icon: 'location-city-icon.svg'
    },
    {
      firstData: '02/12/2020',
      secondData: 'Air 1h 35min',
      thirdData: '(Not Included)',
      icon: 'location-plane-icon.svg'
    },
    {
      firstData: '3 Days',
      secondData: 'Paris',
      thirdData: 'France',
      icon: 'location-city-icon.svg'
    },
    {
      firstData: '02/12/2020',
      secondData: 'Air 1h 35min',
      thirdData: '(Not Included)',
      icon: 'location-plane-icon.svg'
    },
    {
      firstData: '3 DAYS',
      secondData: 'Prague',
      thirdData: 'Czech Republic',
      icon: 'location-city-icon.svg'
    },
    {
      firstData: '02/12/2020',
      secondData: 'Train',
      thirdData: '4 Hours',
      icon: 'location-train-icon.svg'
    },
    {
      firstData: '02/12/2020',
      secondData: 'Departure',
      thirdData: '',
      icon: 'departure-icon.svg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(page: number) {
    console.log(page);
  }
}
