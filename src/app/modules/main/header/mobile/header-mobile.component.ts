import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/core/services/dialog.service';
import { HeaderComponent } from '../desktop/header.component';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent extends HeaderComponent implements OnInit, OnDestroy {

  pages = [
    {
      name: 'Plan Another Trip',
      url: 'bla'
    },
    {
      name: 'All My Trips',
      url: '/all-my-trips',
    },
    {
      name: 'Before Trip',
      url: 'bla'
    },
    {
      name: 'FAQ',
      url: 'bla'
    },
    {
      name: 'Contact us',
      url: 'bla'
    }
  ];


  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
