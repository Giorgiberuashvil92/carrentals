import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DeviceDetectorService } from 'src/app/core/services/device-detector.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  showMobileHeader = false;

  constructor(
    public deviceDetectorService: DeviceDetectorService,
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.authService.loggedIn.next(true)
    }
  }

  onShowMobileHeader() {

  }
}
