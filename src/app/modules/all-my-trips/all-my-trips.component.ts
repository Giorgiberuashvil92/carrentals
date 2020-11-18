import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { DeviceDetectorService } from 'src/app/core/services/device-detector.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { LoadAffiliatePartnerActivitiesAction, SetAffiliatePartnerActivitiesAction } from 'src/app/store/actions';
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

  alternateToursLoading = false;

  constructor(
    public dialogService: DialogService,
    public deviceDetectorService: DeviceDetectorService,
    private store: Store<AppState>,
    private itineraryService: ItineraryService
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
        this.locationDetailData = [this.tours[this.itinerary.tourIndex], ...this.waypoints];
        this.location = this.itineraryService.findCity(this.itinerary, this.day);
      }
      if(!this.itinerary.alternateToursLoading && this.alternateToursLoading) {
        this.alternateToursLoading = false;
        if(this.itinerary.alternateTours.data.length === 0) {
          this.dialogService.closeDialog();
          this.dialogService.openDialog('selectActivity');
        }
      }
      console.log(this.tours);
    });
  }

  onDayChange(day: number) {
    this.store.dispatch(new SetTourIndexAction(0));
    this.store.dispatch(new SetDayIndexAction(day));
    this.store.dispatch(new SetTourAction(this.tours[day]));
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

  onDeleteTour(id: string) {
    this.store.dispatch(new DeleteTourAction(this.itinerary.data.data.id, id));
  }

  onLocationDetailIndexchange(event: number) {
    if(event >= this.locationDetailData.length) return;
    const temp: any = this.locationDetailData[event];
    let query: string;
    if(this.locationDetailData[event].type === 'tours') {
      if(!temp.attributes['tour-offer-id'] || !temp.attributes['tour-offer-id']['$oid']) {
        this.store.dispatch(new SetAffiliatePartnerActivitiesAction({ data: [] }));
        return;
      }
      query = `subject-type=tour-offer&subject-id=${temp.attributes['tour-offer-id']['$oid']}`;
    } else {
      query = `subject-type=poi&subject-id=${temp.id}`;
    }
    this.store.dispatch(new LoadAffiliatePartnerActivitiesAction(query));
  }

  onLoactionChange(index: number) {
    this.onDayChange(this.itinerary.data.data.attributes["transportation-plan"][index]["day-index"]);
  }

  ngOnDestroy() {
    if(this.itinerarySub) this.itinerarySub.unsubscribe();
  }
}
