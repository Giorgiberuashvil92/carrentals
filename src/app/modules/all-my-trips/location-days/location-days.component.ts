import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ItineraryService } from 'src/app/core/services/itinerary.service';
import { AppState } from 'src/app/store/models';
import { ItineraryState } from 'src/app/store/reducers';

@Component({
  selector: 'app-location-days',
  templateUrl: './location-days.component.html',
  styleUrls: ['./location-days.component.scss']
})
export class LocationDaysComponent implements OnInit, OnDestroy {

  @Input() data: any;

  city: any;
  daysArr: any[];
  deletedDaysArr: any[] = [];
  oldDaysArr: any[] = [];

  itineraryState: ItineraryState;
  itineraryStateSub: Subscription;
  dayChangeSub: Subscription;
  okClickSub: Subscription;

  constructor(
    private store: Store<AppState>,
    public itineraryService: ItineraryService
  ) { }

  ngOnInit(): void {
    this.itineraryStateSub = this.store.select(store => store.itinerary).subscribe(res => {
      this.itineraryState = res;
      this.city = this.itineraryService.findCityById(this.itineraryState, this.data.city.data.id);
      this.daysArr = this.data.days.data.map(d => this.itineraryService.findDayById(this.itineraryState, d.id));
      this.oldDaysArr = this.daysArr;
      this.itineraryService.daysObj.old = [...this.itineraryService.daysObj.old, ...this.oldDaysArr];
      let tempArr = [];
      this.daysArr.forEach(d => {
        tempArr.push({
          ...d,
          attributes: {...d.attributes}
        });
      });
      this.daysArr = tempArr;
    });

    this.dayChangeSub = this.itineraryService.dayChange.subscribe((res) => {
      switch (res.action) {
        case 'add':
          this.daysArr = this.daysArr.map(d => this.dayAddMapFn(d, res.index));
          if(this.city.attributes.name === res.cityName) {
            const tempDate = new Date(this.daysArr.find(e => e.attributes.index === res.index + 1).attributes.date);
            tempDate.setDate(tempDate.getDate() - 1);
            this.daysArr.splice(this.daysArr.findIndex(e => e.attributes.index === res.index), 0, res.deletedDay || {
              id: 'newDay',
              attributes: {
                'date': `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`,
                'first-day': false,
                'half-day': false,
                'index': res.index,
                'last-day': false,
                'removable': true
              }
            })
          }
          this.sortDays();
          console.log(this.daysArr);
          break;
        case 'delete':
          if(this.city.attributes.name === res.cityName) {
            this.daysArr.splice(this.daysArr.findIndex(e => e.attributes.index === res.index), 1);
          }
          this.daysArr = this.daysArr.map(d => this.dayDeleteMapFn(d, res.index));
          this.sortDays();
          console.log(this.daysArr);
          break;
        default:
          break;
      }
    });

    this.okClickSub = this.itineraryService.editTripOKClicked.subscribe((res) => {
      this.itineraryService.daysObj.new = [...this.itineraryService.daysObj.new, ...this.daysArr];
    })
  }

  onAddDay() {
    let index: number;
    let deletedDay: any;
    if(this.deletedDaysArr.length > 0) {
      index = this.deletedDaysArr[0].attributes.index;
      deletedDay = this.deletedDaysArr.splice(0, 1)[0];
    } else {
      index = this.daysArr[this.daysArr.length - 1].attributes.index;
    }
    console.log(deletedDay);

    this.itineraryService.dayChange.next({
      action: 'add',
      index,
      cityName: this.city.attributes.name,
      deletedDay
    });
  }

  onDelete(index: number) {
    this.deletedDaysArr.push(this.daysArr[index]);
    this.deletedDaysArr.sort((a, b) => a.attributes.index - b.attributes.index);
    this.itineraryService.dayChange.next({
      action: 'delete',
      index: this.daysArr[index].attributes.index,
      cityName: this.city.attributes.name
    })
  }

  dayAddMapFn(day: any, index: number) {
    if(day.attributes.index >= index) {
      day.attributes.index++;
      const tempDate = new Date(day.attributes.date);
      tempDate.setDate(tempDate.getDate() + 1);
      day.attributes.date = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`;
    }
    return day;
  }

  dayDeleteMapFn(day: any, index: number) {
    if(day.attributes.index >= index) {
      day.attributes.index--;
      const tempDate = new Date(day.attributes.date);
      tempDate.setDate(tempDate.getDate() - 1);
      day.attributes.date = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`;
    }
    return day;
  }

  sortDays() {
    this.daysArr.sort((a, b) => a.attributes.index - b.attributes.index);
  }

  ngOnDestroy() {
    if(this.itineraryStateSub) this.itineraryStateSub.unsubscribe();
    if(this.dayChangeSub) this.dayChangeSub.unsubscribe();
    if(this.okClickSub) this.okClickSub.unsubscribe();
  }
}
