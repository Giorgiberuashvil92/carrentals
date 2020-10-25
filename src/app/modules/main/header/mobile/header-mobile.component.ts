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

  constructor(
    public router: Router
  ) {
    super(router);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
