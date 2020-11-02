import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShowAlternateSolutionsForSpecificTour,} from './store/actions/itineraryAlternateTours.action';
import { ShowAlternateSolutionsForSpecificTourSearchAction } from './store/actions/itineraryToursSearch.action';
import { ShowAlternateSolutionsForSpecificTourSolutionsAction } from './store/actions/itineraryToursSolutions.action';
import { LoadProfileAction } from './store/actions/profile.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private Store: Store){}

  ngOnInit(): void {
    this.Store.dispatch(new LoadProfileAction());
    this.Store.dispatch(new ShowAlternateSolutionsForSpecificTour('5f5e23be306f344825352472', '5f5e23be306f344825352472'))
    this.Store.dispatch(new ShowAlternateSolutionsForSpecificTourSearchAction('5f5e23be306f344825352472'));
    this.Store.dispatch(new ShowAlternateSolutionsForSpecificTourSolutionsAction('5f5e23be306f344825352472'))
  }

  title = 'grt-website-b2b';

}
