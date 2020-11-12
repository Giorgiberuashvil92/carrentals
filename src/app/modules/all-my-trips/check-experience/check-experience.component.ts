import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/core/services/dialog.service';
import { AppState } from 'src/app/store/models';
import { AffiliateState } from 'src/app/store/reducers/affiliate.reducer';

@Component({
  selector: 'app-check-experience',
  templateUrl: './check-experience.component.html',
  styleUrls: ['./check-experience.component.scss']
})
export class CheckExperienceComponent implements OnInit {

  affiliateState$: Observable<AffiliateState>;

  imgURL = "/assets/ph-t.svg"
  ClockIMG = "/assets/time.svg"
  Dollar = "/assets/dollar.svg"
  time = "/assets/exit.svg"

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.affiliateState$ = this.store.select(store => store.affiliate);
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

  openSite() {
    window.open("https://www.google.com" , '_blank');
  }

}
