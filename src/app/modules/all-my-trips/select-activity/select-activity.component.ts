import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-select-activity',
  templateUrl: './select-activity.component.html',
  styleUrls: ['./select-activity.component.scss']
})
export class SelectActivityComponent implements OnInit {

  result = [
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      isSelfGuided: true
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      isSelfGuided: true
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      isSelfGuided: true
    }
  ]

  cities = ['PRAGUE', 'PARIS', 'VIENNA'];
  interests = ['PRAGUE', 'PARIS', 'VIENNA', 'PRAGUE', 'PARIS', 'VIENNA', 'PRAGUE', 'PARIS', 'VIENNA', 'PRAGUE', 'PARIS', 'VIENNA', 'PRAGUE', 'PARIS', 'VIENNA', 'PRAGUE', 'PARIS', 'VIENNA',];

  currentlyChosenIndex = -1;

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

}
