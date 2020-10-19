import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imageSrc = '../../../assetsImg/images/user.png'
  imageAlt = 'User'

  constructor() {}

  ngOnInit(): void {
  }
    navigation = [
    {url: 'www.google.ge', name:'Plan Another Trip'},
    {url: 'www.google.ge', name:'All My Trips'},
    {url: 'www.google.ge', name:'Before Trips'},
    {url: 'www.google.ge', name:'FAQ'},
    {url: 'www.google.ge', name:'Contact Us'},
  ];

}
