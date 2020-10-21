import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationPaginator } from 'src/app/core/models/location-paginator.model';

@Component({
  selector: 'app-location-paginator',
  templateUrl: './location-paginator.component.html',
  styleUrls: ['./location-paginator.component.scss']
})
export class LocationPaginatorComponent implements OnInit {

  @Input() data: LocationPaginator[];
  @Input() leftMostIndex: number = 1;
  @Input() locationsToShow: number = 5;
  @Input() activeIndex: number = 1;
  @Output() locationChange: EventEmitter<number> = new EventEmitter<number>();

  dataToShow: LocationPaginator[];

  constructor() { }

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


  generateArray() {
    this.dataToShow = this.data.slice(this.leftMostIndex - 1, this.leftMostIndex - 1 + this.locationsToShow);
    console.log(this.data);
  }
}
