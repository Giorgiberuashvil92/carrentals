import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() currentPage: number = 1;
  @Input() pagesAmount: number;
  @Input() pagesToShow: number = 10;
  @Input() leftMostPage: number = 1;
  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  pagesArr: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateArray();
  }

  onLeft() {
    if(this.leftMostPage > 1) {
      this.leftMostPage--;
      this.generateArray();
    }
  }

  onRight() {
    if(this.leftMostPage + this.pagesToShow <= this.pagesAmount) {
      this.leftMostPage++;
      this.generateArray();
    }
  }

  onClick(page: number) {
    this.currentPage = page;
    this.page.emit(this.currentPage);
  }

  generateArray() {
    this.pagesArr = new Array<number>(this.pagesToShow);
    for(let i=0; i<this.pagesArr.length; i++) {
      this.pagesArr[i] = this.leftMostPage + i;
    }
  }
}
