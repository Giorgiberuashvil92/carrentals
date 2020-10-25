import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

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

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

}
