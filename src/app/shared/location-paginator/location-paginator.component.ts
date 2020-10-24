import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LocationPaginator } from 'src/app/core/models/location-paginator.model';
import { DeviceDetectorService } from 'src/app/core/services/device-detector.service';

@Component({
  selector: 'app-location-paginator',
  templateUrl: './location-paginator.component.html',
  styleUrls: ['./location-paginator.component.scss']
})
export class LocationPaginatorComponent implements OnInit {

  @ViewChild('wrapper', { static: false }) wrapper: ElementRef;

  @Input() data: LocationPaginator[];
  @Input() leftMostIndex: number = 1;
  @Input() locationsToShow: number = 5;
  @Input() activeIndex: number = 1;
  @Output() locationChange: EventEmitter<number> = new EventEmitter<number>();

  dataToShow: LocationPaginator[];

  mobileTranslate: number = 0;
  isTouched = false;
  initialTouchX: number = 0;

  constructor(
    public deviceDetectorService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    this.generateArray();
  }

  onLeft() {
    if(this.leftMostIndex > 1) {
      this.leftMostIndex--;
      this.generateArray();
    }
    if(this.activeIndex > 1) {
      this.activeIndex--;
      this.locationChange.emit(this.activeIndex);
    }
  }

  onRight() {
    if(this.leftMostIndex + this.locationsToShow <= this.data.length) {
      this.leftMostIndex++;
      this.generateArray();
    }
    if(this.activeIndex < this.data.length) {
      this.activeIndex++;
      this.locationChange.emit(this.activeIndex);
    }
  }

  changeIndex(index: number) {
    this.activeIndex = index;
    this.locationChange.emit(this.activeIndex);
  }

  onTouchStart(event) {
    if(this.deviceDetectorService.isMobile) {
      this.initialTouchX = event.touches[0].clientX;
    }
  }

  onTouchMove(event) {
    if(this.deviceDetectorService.isMobile) {
      const clientX = event.touches[0].clientX;
      const diff = clientX - this.initialTouchX;
      if((this.mobileTranslate < 0 || diff < 0) && (this.wrapper.nativeElement.scrollWidth + 60 > window.innerWidth || diff > 0)) {
        this.mobileTranslate += diff;
      }
      this.initialTouchX = clientX;
    }
  }

  generateArray() {
    this.dataToShow = this.data.slice(this.leftMostIndex - 1, this.leftMostIndex - 1 + this.locationsToShow);
    console.log(this.data);
  }
}
