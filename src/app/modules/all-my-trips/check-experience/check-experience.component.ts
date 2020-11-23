import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector.service';
import { AffiliateService } from 'src/app/core/services/affiliate.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { SetTourIndexAction, SetTourAction } from 'src/app/store/actions';
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
  itinerary: any;
  tours: any;
  index = 0;
  affiliateStateOne: any;

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>,
    public deviceDetectorService : DeviceDetectorService,
    private affiliateService: AffiliateService
  ) { }

  ngOnInit(): void {
    this.affiliateState$ = this.store.select(store => store.affiliate);
  }

  onLeft(affiliateState: { partnerActivities: { data: any; }; }) {
    let affiliateStateOne  = affiliateState

    }

  onRight() {

  }
  openSite() {
  }

  onClick(partnerActivity: any) {
    this.dialogService.openDialog('acceptDialog', {
      question: `Did you book ${partnerActivity.attributes.title}?`,
      yesFn: this.affiliateService.test
    });
    window.open(partnerActivity.attributes.url , '_blank');
  }

}
