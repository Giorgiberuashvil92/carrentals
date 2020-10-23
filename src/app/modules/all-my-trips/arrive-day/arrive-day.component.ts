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

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

}
