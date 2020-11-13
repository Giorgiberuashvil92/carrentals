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
import { CheckExperienceComponent } from './check-experience/check-experience.component';
import { DetailItirenaryComponent } from './detail-itirenary/detail-itirenary.component'
import { ArriveDayComponent } from './arrive-day/arrive-day.component';
import { LocationDaysComponent } from './location-days/location-days.component';
import { AcceptDialogComponent } from './accept-dialog/accept-dialog.component';
import { NotIncludeComponent } from './not-include/not-include.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangeTransportComponent } from './change-transport/change-transport.component';

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
    EditTripComponent,
    CheckExperienceComponent,
    DetailItirenaryComponent,
    ArriveDayComponent,
    LocationDaysComponent,
    AcceptDialogComponent,
    NotIncludeComponent,
    ChangeTransportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SwiperModule,
    FormsModule,
    MatDialogModule
  ]
})
export class AllMyTripsModule { }
