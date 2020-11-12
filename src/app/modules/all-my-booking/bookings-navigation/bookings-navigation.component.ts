import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-booking-navigation',
  templateUrl: './bookings-navigation.component.html',
  styleUrls: ['./bookings-navigation.component.scss']
})
export class BookingsNavigationComponent implements OnInit {

  constructor(
    public dialogService: DialogService
  ) { }

   option = 0;

  array = [
    {name:'All My bookings', imageURL: '../../../../assets/book.svg'},
    {name:'City Cards & Local Transport', imageURL: '../../../../assets/bus.svg'},
    {name:'Tours & Activities', imageURL: '../../../../assets/walking-man.svg'},
    {name:'Inter-City Transport', imageURL: '../../../../assets/interpoller.svg'},
    {name:'Hotels & Apartments', imageURL: '../../../../assets/bed.svg'},
  ]

  ngOnInit(): void {
  }


}
