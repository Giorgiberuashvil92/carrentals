import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AffiliateService } from 'src/app/core/services/affiliate.service';
import { DialogService } from 'src/app/core/services/dialog.service';
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
    private store: Store<AppState>,
    private dialogService: DialogService,
    private affiliateService: AffiliateService
  ) { }

  ngOnInit(): void {
    this.affiliateStateSub = this.store.select(store => store.affiliate).subscribe(res => {
      this.affiliateState = res;
    });
  }

  onClick(activity: any, isTransport: boolean = false) {
    this.dialogService.openDialog('acceptDialog', {
      question: `Did you book ${isTransport ? activity.title : activity.attributes.title}?`,
      yesFn: this.affiliateService.test
    });
    window.open(isTransport ? activity.url : activity.attributes.url , '_blank');
  }

  ngOnDestroy() {
    if(this.affiliateStateSub) this.affiliateStateSub.unsubscribe();
  }
}
