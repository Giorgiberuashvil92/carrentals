import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

  isOpen: boolean = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onMouseEnter(event) {
    console.log('enter');
    this.isOpen = true;
  }

  onMouseLeave(event) {
    console.log('leave');
    this.isOpen = false;
  }
}
