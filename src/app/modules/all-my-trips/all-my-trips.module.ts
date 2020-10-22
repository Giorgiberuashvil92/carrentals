import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMyTripsComponent } from './all-my-trips.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ChangeActivityComponent } from './change-activity/change-activity.component';
import { SelectActivityComponent } from './select-activity/select-activity.component';
import { FormsModule } from '@angular/forms';
import { EditTripComponent } from './edit-trip/edit-trip.component';

const routes: Routes = [
  {
    path: '', component: AllMyTripsComponent
  }
]

@NgModule({
  declarations: [
    AllMyTripsComponent, 
    LocationDetailComponent, 
    ChangeActivityComponent, 
    SelectActivityComponent, 
    EditTripComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SwiperModule,
    FormsModule
  ]
})
export class AllMyTripsModule { }
