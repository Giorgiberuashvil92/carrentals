import { Component, OnInit } from '@angular/core';
import { LocationPaginator } from 'src/app/core/models/location-paginator.model';
import { DialogService } from 'src/app/core/services/dialog.service';

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

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.dialogService.openDialog('arriveDay');
  }

  onPageChange(page: number) {
    console.log(page);
  }

  onChange() {
    console.log('aaaaaaa');
    this.dialogService.openDialog('changeActivity');
  }
}
