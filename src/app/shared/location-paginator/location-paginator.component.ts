import { Component, Input, OnInit } from '@angular/core';
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
  }

  onRight() {
    if(this.leftMostIndex + this.locationsToShow <= this.data.length) {
      this.leftMostIndex++;
      this.generateArray();
    }
  }


  generateArray() {
    this.dataToShow = this.data.slice(this.leftMostIndex - 1, this.leftMostIndex - 1 + this.locationsToShow);
    console.log(this.data);
  }
}
