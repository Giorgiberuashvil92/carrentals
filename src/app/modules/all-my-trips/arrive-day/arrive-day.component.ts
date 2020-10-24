import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-arrive-day',
  templateUrl: './arrive-day.component.html',
  styleUrls: ['./arrive-day.component.scss']
})
export class ArriveDayComponent implements OnInit {

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

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

}
