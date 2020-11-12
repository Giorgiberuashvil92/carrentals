import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit, OnChanges {

  @Input() data: any[];
  @Output() indexChange = new EventEmitter<number>();

  config: SwiperConfigInterface = {
    navigation: {
      nextEl: 'none',
      prevEl: 'none'
    },
    loop: true
  };

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges() {
    this.indexChange.emit(0);
  }

  onIndexChange(event: number) {
    this.indexChange.emit(event);
  }

  goLeftSlider() {

  }

  goRightSlider() {

  }
}
