import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model'
import { ShowAlternateSolutionsForSpecificTour,} from './store/actions/itineraryAlternateTours.action';
import { ShowAlternateSolutionsForSpecificTourSearchAction } from './store/actions/itineraryToursSearch.action';
import { ShowAlternateSolutionsForSpecificTourSolutionsAction } from './store/actions/itineraryToursSolutions.action';
import { LoadProfileAction } from './store/actions/profile.action';
import { LoadPutProfileAction } from './store/actions/putProfile.action';
import { LoadSessionAction } from './store/actions/session.action';
import { SignInAuthAction, SignUpAuthAction } from './store/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>){}


  ngOnInit(): void {
    // this.store.dispatch(new LoadProfileAction());
    // this.store.dispatch(new ShowAlternateSolutionsForSpecificTour('5f5e23be306f344825352472', '5f5e23be306f344825352472'))
    // this.store.dispatch(new ShowAlternateSolutionsForSpecificTourSearchAction('5f5e23be306f344825352472'));
    // this.store.dispatch(new ShowAlternateSolutionsForSpecificTourSolutionsAction('5f5e23be306f344825352472'));
    // this.store.dispatch(new LoadPutProfileAction());
    // this.store.dispatch(new LoadSessionAction());
    this.store.dispatch(new SignUpAuthAction({
      type: 'users',
      attributes: {
        email: 'user@gre.com',
        password: 'Paroli1',
        phone: '123456789',
        "first-name": 'abcd',
        "last-name": 'efgh'
      }
    }));
    // this.store.dispatch(new SignInAuthAction({
    //   type: 'users',
    //   attributes: {
    //     email: 'user@gre.com',
    //     password: '12345678'
    //   }
    // }))
  }

  title = 'grt-website-b2b';

}
