import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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

  affiliateState: AffiliateState;
  affiliateStateSub: Subscription;

  dataToShow: any[] = [];
  leftIndex = 0;

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
    this.affiliateStateSub = this.store.select(store => store.affiliate).subscribe(res => {
      this.affiliateState = res;
      if(this.affiliateState.partnerActivities && this.affiliateState.partnerActivities.data 
        && this.affiliateState.partnerActivities.data.length > 0 && !this.affiliateState.partnerActivitiesLoading) {
          this.generateDataToShow();
      }
    });
  }

  onLeft() {
    if(this.leftIndex > 0) {
      this.leftIndex--;
      this.generateDataToShow();
    }
  }

  onRight() {
    if(this.leftIndex < this.affiliateState.partnerActivities.data.length - 2) {
      this.leftIndex++;
      this.generateDataToShow();
    }
  }

  onClick(partnerActivity: any) {
    this.dialogService.openDialog('acceptDialog', {
      question: `Did you book ${partnerActivity.attributes.title}?`,
      yesFn: this.affiliateService.test
    });
    window.open(partnerActivity.attributes.url , '_blank');
  }

  generateDataToShow() {
    this.dataToShow = this.deviceDetectorService.isDesktop ? this.affiliateState.partnerActivities.data
       : this.affiliateState.partnerActivities.data.slice(this.leftIndex, this.leftIndex + 2);
  }
}
