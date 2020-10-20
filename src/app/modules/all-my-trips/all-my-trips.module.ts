import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMyTripsComponent } from './all-my-trips.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { SwiperModule } from 'ngx-swiper-wrapper';

const routes: Routes = [
  {
    path: '', component: AllMyTripsComponent
  }
]

@NgModule({
  declarations: [AllMyTripsComponent, LocationDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SwiperModule
  ]
})
export class AllMyTripsModule { }
