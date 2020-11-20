import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { LocationPaginator } from 'src/app/core/models/location-paginator.model';
import { CityService } from 'src/app/core/services/city.service';
import { DeviceDetectorService } from 'src/app/core/services/device-detector.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { LoadAffiliatePartnerActivitiesAction, SetAffiliatePartnerActivitiesAction, SetCitiesAction } from 'src/app/store/actions';
import { DeleteTourAction, LoadItineraryAction, LoadItineraryAlternateToursAction, SetDayIndexAction, SetTourAction, SetTourIndexAction } from 'src/app/store/actions/itinerary.action';
import { AppState } from 'src/app/store/models/app-state.model';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-all-my-trips',
  templateUrl: './all-my-trips.component.html',
  styleUrls: ['./all-my-trips.component.scss']
})
export class AllMyTripsComponent implements OnInit, OnDestroy {

  itinerary$: Observable<ItineraryState>;
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
  @Output() locationChange: EventEmitter<number> = new EventEmitter<number>();

  alternateToursLoading = false;
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
      if(this.itinerary.tourIndex < this.tours.length) {
        const tempLocationData = [this.tours[this.itinerary.tourIndex], ...this.waypoints];
        if(!tempLocationData.every(r => !!this.locationDetailData.find(e => r.id === e.id))
          || !this.locationDetailData.every(r => !!tempLocationData.find(e => r.id === e.id))) {
            this.locationDetailData = tempLocationData;
          }
        this.location = this.itineraryService.findCity(this.itinerary, this.day);
      }
      if(!this.itinerary.alternateToursLoading && this.alternateToursLoading) {
        this.alternateToursLoading = false;
        if(this.itinerary.alternateTours.data.length === 0) {
          this.dialogService.closeDialog();
          this.dialogService.openDialog('selectActivity');
        }
      }
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

  onTourChange(tourIndex: number, tour: any) {
    this.store.dispatch(new SetTourIndexAction(tourIndex));
    this.store.dispatch(new SetTourAction(tour));
  }

  generateCitiesArray(cities: any[], included: any[]) {
    const res: string[] = cities.map(c => included.find(i => i.type === 'cities' && i.id === c.id).attributes.name);
    return res.length <= 3 ? res : [res[0], '...', res[res.length-1]];
  }

  onChange(tour: any) {
    this.alternateToursLoading = true;
    this.store.dispatch(new LoadItineraryAlternateToursAction({ itineraryId: this.itinerary.data.data.id, id: tour.id}));
    if(tour.attributes['transport-type']) {
      this.dialogService.openDialog('changeTransport');
    } else {
      this.dialogService.openDialog('changeActivity');
    }
  }

  onLeft() {
    // if(this.leftMostIndex > 1) {
    //   this.store.dispatch(new SetTourIndexAction(this.itinerary.tourIndex - 1));
    //   this.store.dispatch(new SetTourAction(this.tours[this.itinerary.tourIndex - 1]));
    // }
    // if(this.activeIndex > 1) {
    //   this.activeIndex--;
    //   this.locationChange.emit(this.activeIndex);
    // }

    //marcxniv
    if(this.itinerary.tourIndex > 0){
      console.log(this.tours.length);
      this.store.dispatch(new SetTourIndexAction(this.itinerary.tourIndex - 1));
      this.store.dispatch(new SetTourAction(this.tours[this.itinerary.tourIndex - 1]));
    }

  }

  onRight() {
    this.store.dispatch(new SetTourIndexAction(this.itinerary.tourIndex + 1));
    this.store.dispatch(new SetTourAction(this.tours[this.itinerary.tourIndex + 1]));
  }

  onDeleteTour(id: string) {
    this.store.dispatch(new DeleteTourAction(this.itinerary.data.data.id, id));
  }

  onLocationDetailIndexchange(event: number) {
    if(event >= this.locationDetailData.length) return;
    const temp: any = this.locationDetailData[event];
    let query: string;
    if(temp.type === 'tours') {
      console.log(temp)
      if(!temp.relationships['tour-offer'] || !temp.relationships['tour-offer'].data || !temp.relationships['tour-offer'].data.id) {
        this.store.dispatch(new SetAffiliatePartnerActivitiesAction({ data: [] }));
        return;
      }
      query = `subject-type=tour-offer&subject-id=${temp.relationships['tour-offer'].data.id}`;
    } else {
      query = `subject-type=poi&subject-id=${temp.id}`;
    }
    this.store.dispatch(new LoadAffiliatePartnerActivitiesAction(query));
  }

  onLocationChange(index: number) {
    this.onDayChange(this.itinerary.data.data.attributes["transportation-plan"][index-1]["day-index"]);
  }

  generateArray() {
    this.dataToShow = this.data.slice(this.leftMostIndex - 1, this.leftMostIndex - 1 + this.locationsToShow);
  }

  ngOnDestroy() {
    if(this.itinerarySub) this.itinerarySub.unsubscribe();
  }
}
