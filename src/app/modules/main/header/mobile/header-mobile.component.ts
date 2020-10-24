import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../desktop/header.component';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent extends HeaderComponent implements OnInit {

  @Output() hideMobileHeader: EventEmitter<any> = new EventEmitter<any>();

  pages: any[] = [
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

  constructor(
    public router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
