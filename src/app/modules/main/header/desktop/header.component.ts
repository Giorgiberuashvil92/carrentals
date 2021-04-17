import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {


  constructor(
    public router: Router,
    public dialogService: DialogService,
  ) { }

  ngOnInit(): void {

  }
  onRoute(){
    this.router.navigate(['/carrent'])
    .then(succes => console.log('navigation succes',succes))
    .catch(console.error)
  }

  ngOnDestroy() {
  }
}
