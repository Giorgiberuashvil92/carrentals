import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {
  imgURL = "../../../../assets/full-photo.svg"
  imgALT = "DONTWORKING"

  array = [
    { name:'Prague Castle & Hradčany',
      description:'Throughout history, theyve been occupied by castle guards,Throughout history, theyve been occupied by castle guards,Throughout history, theyve been occupied by castle guards,Throughout history, theyve been occupied by castle guards,Throughout history, theyve been occupied by castle guards,Throughout history, theyve been occupied by castle guards,Throughout history, theyve been occupied by castle guards,Throughout history, theyve been occupied by castle guards, goldsmiths, and, Throughout history, theyve been occupied by castle guards, goldsmiths, and,Throughout history, theyve been occupied by castle guards, goldsmiths, and,Throughout history, theyve been occupied by castle guards, goldsmiths, and,Throughout history, theyve been occupied by castle guards, goldsmiths, and,Throughout history, theyve been occupied by castle guards, goldsmiths, and',
      nam: this.imgURL,
      small:'Overview of Golden Lane'},
    {name:'Golden Line', nam: this.imgURL,small:'Overview of Golden Lane'},
    {name:'Golden Line', nam: this.imgURL,small:'Overview of Golden Lane'},
  ]

  config = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  onIndexChange(event) {
    console.log(event);
  }
}
