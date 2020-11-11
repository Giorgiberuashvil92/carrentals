import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { DeviceDetectorService } from 'src/app/core/services/device-detector.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { DeleteTourAction, LoadItineraryAction, SetDayIndexAction, SetTourIndexAction } from 'src/app/store/actions/itinerary.action';
import { AppState } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-all-my-bookings',
  templateUrl: './all-my-booking.component.html',
  styleUrls: ['./all-my-booking.component.scss']
})
export class AllMyBookingsComponent implements OnInit {

  itinerary$: Observable<ItineraryState>;
  itinerary: ItineraryState;
  itinerarySub: Subscription;
  day: any;
  waypoints: any[];

  constructor(
    public dialogService: DialogService,
    public deviceDetectorService: DeviceDetectorService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadItineraryAction('5f5e23be306f344825352472'));
    this.itinerary$ = this.store.select(store => store.itinerary);
    this.itinerarySub = this.itinerary$
    .pipe(
      tap(r => this.itinerary = r),
      filter(r => !r.loading)
    )
    .subscribe(res => {
      this.generateCitiesArray(this.itinerary.data.data['relationships'].cities.data, this.itinerary.data['included']);
      this.day = this.itinerary.data['included'].find(i => i.type === 'days' && i.id === this.itinerary.data.data['relationships'].days.data[this.itinerary.dayIndex-1].id)
      this.waypoints = this.generateTours()[this.itinerary.tourIndex]['relationships'].pois.data.map(d => this.itinerary.data['included'].find(i => i.type === 'waypoints' && i.id === d.id));
    });
  }

  // onDayChange(day: number) {
  //   this.store.dispatch(new SetDayIndexAction(day));
  //   this.store.dispatch(new SetTourIndexAction(0));
  // }

  // onTourChange(tour: number) {
  //   this.store.dispatch(new SetTourIndexAction(tour));
  // }

  generateCitiesArray(cities: any[], included: any[]) {
    const res: string[] = cities.map(c => included.find(i => i.type === 'cities' && i.id === c.id).attributes.name);
    return res.length <= 3 ? res : [res[0], '...', res[res.length-1]];
  }

  // findLocation(day: number) {
  //   if(this.day['relationships']['starting-city'].data && this.day['relationships']['starting-city'].data.id
  //       && this.day['relationships']['ending-city'].data && this.day['relationships']['ending-city'].data.id
  //       && this.day['relationships']['starting-city'].data.id !== this.day['relationships']['ending-city'].data.id) {
  //     return this.itinerary.data['included'].find(i => i.type === 'cities' && i.id === this.day['relationships']['starting-city'].data.id).attributes.name
  //        + ' - '
  //        + this.itinerary.data['included'].find(i => i.type === 'cities' && i.id === this.day['relationships']['ending-city'].data.id).attributes.name;
  //   }
  //   if(this.day['relationships']['starting-city'].data && this.day['relationships']['starting-city'].data.id) {
  //     return this.itinerary.data['included'].find(i => i.type === 'cities' && i.id === this.day['relationships']['starting-city'].data.id).attributes.name;
  //   } else if(this.day['relationships']['ending-city'].data && this.day['relationships']['ending-city'].data.id) {
  //     return this.itinerary.data['included'].find(i => i.type === 'cities' && i.id === this.day['relationships']['ending-city'].data.id).attributes.name;
  //   }
  //   console.log(this.itinerary.data['included']);
  //   return 'Location Not Found';
  // }

  generateTours() {
    return this.day['relationships']['tours'].data.map(t => this.itinerary.data['included'].find(i => i.type === 'tours' && i.id === t.id));
  }

  // onChange() {
  //   this.dialogService.openDialog('changeActivity', this.generateTours());
  // }

  // onDeleteTour(id: string) {
  //   this.store.dispatch(new DeleteTourAction(this.itinerary.data.data.id, id));
  // }

  // ngOnDestroy() {
  //   if(this.itinerarySub) this.itinerarySub.unsubscribe();
  // }
}
