import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { LocationPaginator } from 'src/app/core/models/location-paginator.model';
import { CityService } from 'src/app/core/services/city.service';
import { DeviceDetectorService } from 'src/app/core/services/device-detector.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { SetCitiesAction } from 'src/app/store/actions';
import { DeleteTourAction, LoadItineraryAction, SetDayIndexAction, SetTourAction, SetTourIndexAction } from 'src/app/store/actions/itinerary.action';
import { AppState } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';
import { CityState } from 'src/app/store/reducers/city.reducer';

@Component({
  selector: 'app-all-my-bookings',
  templateUrl: './all-my-booking.component.html',
  styleUrls: ['./all-my-booking.component.scss']
})
export class AllMyBookingsComponent implements OnInit, OnDestroy {

  itinerary$: Observable<ItineraryState>;
  cityState$: Observable<CityState>;
  itinerary: ItineraryState;
  itinerarySub: Subscription;
  day: any;
  tours: any[] = [];
  waypoints: any[] = [];
  locationDetailData: any[] = [];
  location: string;
  dataToShow: LocationPaginator[];
  @Input() data: LocationPaginator[];
  @Input() leftMostIndex: number = 1;
  @Input() locationsToShow: number = 5;
  @Input() activeIndex: number = 1;

  locationPaginatorActiveIndex = 1;

  constructor(
    public dialogService: DialogService,
    public deviceDetectorService: DeviceDetectorService,
    private store: Store<AppState>,
    private itineraryService: ItineraryService,
    private cityService: CityService
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
      this.day = this.itineraryService.generateDay(this.itinerary);
      this.tours = this.itineraryService.generateTours(this.itinerary, this.day);
      this.tours.sort((a, b) => a.attributes.position - b.attributes.position);
      this.waypoints = this.itineraryService.generateWaypoints(this.itinerary, this.tours);
      this.store.dispatch(new SetCitiesAction(this.cityService.generateCities(this.itinerary)));
    });
  }

  onDayChange(day: number) {
    this.store.dispatch(new SetTourIndexAction(0));
    this.store.dispatch(new SetDayIndexAction(day));
    this.store.dispatch(new SetTourAction(this.tours[day]));
    const tempTransportationPlan = [...this.itinerary.data.data.attributes['transportation-plan']];
    console.log(day)
    console.log(tempTransportationPlan)
    tempTransportationPlan.sort((a, b) => a["day-index"] - b["day-index"]);
    for(let i=0; i<tempTransportationPlan.length; i++) {
      if(day === tempTransportationPlan[i]["day-index"]) {
        this.locationPaginatorActiveIndex = i+1;
        break;
      } else if(day < tempTransportationPlan[i]["day-index"]) {
        this.locationPaginatorActiveIndex = i;
        break;
      }
    }
    console.log(this.locationPaginatorActiveIndex);
  }

  generateCitiesArray(cities: any[], included: any[]) {
    const res: string[] = cities.map(c => included.find(i => i.type === 'cities' && i.id === c.id).attributes.name);
    return res.length <= 3 ? res : [res[0], '...', res[res.length-1]];
  }

  onDeleteTour(id: string) {
    this.store.dispatch(new DeleteTourAction(this.itinerary.data.data.id, id));
  }

  onLocationChange(index: number) {
    this.onDayChange(this.itinerary.data.data.attributes["transportation-plan"][index-1]["day-index"]);
  }

  ngOnDestroy() {
    if(this.itinerarySub) this.itinerarySub.unsubscribe();
  }
}
