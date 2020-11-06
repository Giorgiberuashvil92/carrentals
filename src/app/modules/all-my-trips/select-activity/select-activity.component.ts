import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/core/services/dialog.service';
import { LoadCitiesAction, LoadInterestsAction } from 'src/app/store/actions';
import { AppState } from 'src/app/store/models';
import { CityState } from 'src/app/store/reducers/city.reducer';
import { InterestState } from 'src/app/store/reducers/interest.reducer';

@Component({
  selector: 'app-select-activity',
  templateUrl: './select-activity.component.html',
  styleUrls: ['./select-activity.component.scss']
})
export class SelectActivityComponent implements OnInit {

  result = [
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      city: 'Prague',
      isSelfGuided: true
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      city: 'Prague',
      isSelfGuided: true
    },
    {
      img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Prague_Cover.jpg',
      title: 'Prague Castle',
      city: 'Prague',
      isSelfGuided: true
    }
  ]
  
  currentlyChosenIndex = -1;

  citySet = new Set<string>();
  interestSet = new Set<string>();
  acitivityInput: string = '';
  cityState$: Observable<CityState>;
  interestState$: Observable<InterestState>

  constructor(
    public dialogService: DialogService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadCitiesAction());
    this.store.dispatch(new LoadInterestsAction());
    this.cityState$ = this.store.select(store => store.city);
    this.interestState$ = this.store.select(store => store.interest);
  }
  
  toggleCity(city: string) {
    if(this.citySet.has(city)) {
      this.citySet.delete(city);
    } else {
      this.citySet.add(city);
    }
    this.searchActivity();
  }

  toggleInterest(interest: string) {
    if(this.interestSet.has(interest)) {
      this.interestSet.delete(interest);
    } else {
      this.interestSet.add(interest);
    }
    this.searchActivity();
  }

  searchActivity() {
    this.currentlyChosenIndex = 0;
  }
}
