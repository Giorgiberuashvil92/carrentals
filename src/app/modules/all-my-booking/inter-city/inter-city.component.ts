import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/models';
import { AffiliateState } from 'src/app/store/reducers/affiliate.reducer';

@Component({
  selector: 'app-inter-city',
  templateUrl: './inter-city.component.html',
  styleUrls: ['./inter-city.component.scss']
})
export class InterCityComponent implements OnInit, OnDestroy {

  @Input() city: any;

  affiliateState: AffiliateState;
  affiliateStateSub: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.affiliateStateSub = this.store.select(store => store.affiliate).subscribe(res => {
      this.affiliateState = res;
    });
  }

  ngOnDestroy() {
    if(this.affiliateStateSub) this.affiliateStateSub.unsubscribe();
  }
}
