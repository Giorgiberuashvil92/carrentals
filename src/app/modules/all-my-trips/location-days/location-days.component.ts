import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-days',
  templateUrl: './location-days.component.html',
  styleUrls: ['./location-days.component.scss']
})
export class LocationDaysComponent implements OnInit {

  @Input() city: string;

  days = [
    {
      num: 1,
      name: 'FRI',
      dd: 25,
      month: 'AUG'
    },
    {
      num: 2,
      name: 'FRI',
      dd: 26,
      month: 'AUG'
    },
    {
      num: 3,
      name: 'FRI',
      dd: 27,
      month: 'AUG'
    },
    {
      num: 4,
      name: 'FRI',
      dd: 28,
      month: 'AUG'
    },
    {
      num: 5,
      name: 'FRI',
      dd: 29,
      month: 'AUG'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
