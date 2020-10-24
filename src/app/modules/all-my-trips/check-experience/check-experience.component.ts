import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-check-experience',
  templateUrl: './check-experience.component.html',
  styleUrls: ['./check-experience.component.scss']
})
export class CheckExperienceComponent implements OnInit {
 imgURL = "/assets/ph-t.svg"
 ClockIMG = "/assets/time.svg"
 Dollar = "/assets/dollar.svg"
 time = "/assets/exit.svg"

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }
  array = [
      {image:this.imgURL,name:'Golden Lane Stuff 1', text:'Enjoy different dishes and drinks surrounded by the best castle atmosphere. One of the most delicious stakes as quoted by our food specialists. Eat, drink, get full, dance, enjoy, Eat, drink, get full, dance, enjoy, Eat, drink, get full. dance, enjoy,  '},
      {image:this.imgURL,name:'Golden Lane Stuff 1', text:'Enjoy different dishes and drinks surrounded by the best castle atmosphere. One of the most delicious stakes as quoted by our food specialists. Eat, drink, get full, dance, enjoy, Eat, drink, get full, dance, enjoy, Eat, drink, get full. dance, enjoy,  '},
      {image:this.imgURL,name:'Golden Lane Stuff 1', text:'Enjoy different dishes and drinks surrounded by the best castle atmosphere. One of the most delicious stakes as quoted by our food specialists. Eat, drink, get full, dance, enjoy, Eat, drink, get full, dance, enjoy, Eat, drink, get full. dance, enjoy,  '},
      {image:this.imgURL,name:'Golden Lane Stuff 1', text:'Enjoy different dishes and drinks surrounded by the best castle atmosphere. One of the most delicious stakes as quoted by our food specialists. Eat, drink, get full, dance, enjoy, Eat, drink, get full, dance, enjoy, Eat, drink, get full. dance, enjoy,  '},
      {image:this.imgURL,name:'Golden Lane Stuff 1', text:'Enjoy different dishes and drinks surrounded by the best castle atmosphere. One of the most delicious stakes as quoted by our food specialists. Eat, drink, get full, dance, enjoy, Eat, drink, get full, dance, enjoy, Eat, drink, get full. dance, enjoy,  '},
      {image:this.imgURL,name:'Golden Lane Stuff 1', text:'Enjoy different dishes and drinks surrounded by the best castle atmosphere. One of the most delicious stakes as quoted by our food specialists. Eat, drink, get full, dance, enjoy, Eat, drink, get full, dance, enjoy, Eat, drink, get full. dance, enjoy,  '},
      {image:this.imgURL,name:'Golden Lane Stuff 1', text:'Enjoy different dishes and drinks surrounded by the best castle atmosphere. One of the most delicious stakes as quoted by our food specialists. Eat, drink, get full, dance, enjoy, Eat, drink, get full, dance, enjoy, Eat, drink, get full. dance, enjoy,  '},

  ]

  imgArray = [
    {clockimage:this.ClockIMG, dollarimg: this.Dollar, time:this.time }
  ]

  openSite() {
    window.open("https://www.google.com" , '_blank');
 }

}
