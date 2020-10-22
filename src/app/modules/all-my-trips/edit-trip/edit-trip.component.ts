import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.scss']
})
export class EditTripComponent implements OnInit {

  result = [
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      city: 'Prague',
      isSelfGuided: true
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      city: 'Prague',
      isSelfGuided: true
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      city: 'Prague',
      isSelfGuided: true
    }
  ]

  cities = ['PRAGUE', 'PARIS', 'VIENNA'];
  interests = ['PRAGUE1', 'PARIS1', 'VIENNA1', 'PRAGUE2', 'PARIS2', 'VIENNA2', 'PRAGUE3', 'PARIS3', 'VIENNA3', 'PRAGUE4', 'PARIS4', 'VIENNA4', 'PRAGUE5', 'PARIS5', 'VIENNA5', 'PRAGUE6', 'PARIS6', 'VIENNA6'];

  currentIndex = -1;
  newIndex = 0;

  citySet = new Set<string>();
  interestSet = new Set<string>();
  acitivityInput: string = '';

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }
  
  toggleCity(city: string) {
    if(this.citySet.has(city)) {
      this.citySet.delete(city);
    } else {
      this.citySet.add(city);
    }
    this.searchActivity();
  }

  toggleInterest(interest: string) {
    if(this.interestSet.has(interest)) {
      this.interestSet.delete(interest);
    } else {
      this.interestSet.add(interest);
    }
    this.searchActivity();
  }

  searchActivity() {
    this.currentlyChosenIndex = 0;
  }
}
