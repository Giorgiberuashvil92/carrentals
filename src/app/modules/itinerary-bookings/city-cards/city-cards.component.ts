import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/models';
import { AffiliateState } from 'src/app/store/reducers/affiliate.reducer';


@Component({
  selector: 'app-city-cards',
  templateUrl: './city-cards.component.html',
  styleUrls: ['./city-cards.component.scss']
})
export class CityCardsComponent implements OnInit, OnDestroy {

  @Input() city: any;

  affiliateState: AffiliateState;
  affiliateStateSub: Subscription;

  dataToShow: any[];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.affiliateStateSub = this.store.select(store => store.affiliate).subscribe(res => {
      this.affiliateState = res;
      if(this.affiliateState.partnerActivities && this.affiliateState.partnerActivities.data) {
        this.dataToShow = [...this.affiliateState.partnerActivities.data];
        this.dataToShow.sort((a, b) => a.attributes.position - b.attributes.position)
      }
    });
  }

  array = [
    {
    image: '../../../../assets/paris.svg',
    name:'Paris PassLib 2,3,4 days',
    description:'Enjoy Paris at its fullest with the PassLib sightseeing package including unlimited transportation, access to over 50 museums, a Seine River...',
    validity:'validity',
    flexible:'Flexible',
    enhance: 'Enhance Tickets',
    money: '€ 45'
  },
  {
    image: '../../../../assets/paris.svg',
    name:'Paris PassLib 2,3,4 days',
    description:'Enjoy Paris at its fullest with the PassLib sightseeing package including unlimited transportation, access to over 50 museums, a Seine River...',
    validity: 'duration',
    flexible: '9HRS',
    enhance: 'Enhance Guids',
    money:'€ 145'
  },
  ]
  ngOnDestroy() {
    if(this.affiliateStateSub) this.affiliateStateSub.unsubscribe();
  }
}
