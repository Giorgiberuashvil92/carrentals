import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadProfileAction } from './store/actions/profile.action';
import { ProfileEffects } from './store/effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private Store: Store){}

  ngOnInit(): void {
    this.Store.dispatch(new LoadProfileAction())
  }

  title = 'grt-website-b2b';

}
