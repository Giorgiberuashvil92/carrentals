import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() date: string;
  dateObj: Date;

  constructor() { }

  ngOnInit(): void {
    this.dateObj = new Date(this.date);
  }

}
