import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { LoadAffiliatePartnerActivitiesAction } from 'src/app/store/actions';
import { AppState } from 'src/app/store/models';
import { CityState } from 'src/app/store/reducers/city.reducer';

@Component({
  selector: 'app-booking-navigation',
  templateUrl: './bookings-navigation.component.html',
  styleUrls: ['./bookings-navigation.component.scss']
})
export class BookingsNavigationComponent implements OnInit, OnDestroy {

  cityState: CityState;
  cityStateSub: Subscription;
  activeCityIndex = 0;
  option = 1;

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>,
    public deviceDetectorService : DeviceDetectorService
  ) { }

  array = [
    {name:'All My bookings', imageURL: '/assets/book.svg'},
    {name:'City Cards & Local Transport', imageURL: '/assets/bus.svg'},
    {name:'Tours & Activities', imageURL: '/assets/walking-man.svg'},
    {name:'Inter-City Transport', imageURL: '/assets/interpoller.svg'},
    {name:'Hotels & Apartments', imageURL: '/assets/bed.svg'},
  ]

  ngOnInit(): void {
    this.cityStateSub = this.store.select(store => store.city).subscribe(res => {
      this.cityState = res;
      if(this.cityState.cities && this.cityState.cities.data && this.cityState.cities.data.length > 0) {
        this.onCityClick(this.cityState.cities.data[0], 0);
      }
    });
  }

  onCityClick(city: any, index: number) {
    this.activeCityIndex = index;
    const query: string = `subject-type=city&subject-id=${city.id}`;
    this.store.dispatch(new LoadAffiliatePartnerActivitiesAction(query));
    console.log(city);
  }

  openDialog(){
    this.dialogService.openDialog('navigationDialog');
  }

  ngOnDestroy() {
    if(this.cityStateSub) this.cityStateSub.unsubscribe();
  }
}
