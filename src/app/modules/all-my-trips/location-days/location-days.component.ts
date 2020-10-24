import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-days',
  templateUrl: './location-days.component.html',
  styleUrls: ['./location-days.component.scss']
})
export class LocationDaysComponent implements OnInit {

  @Input() city: string;
  @Input() days: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
