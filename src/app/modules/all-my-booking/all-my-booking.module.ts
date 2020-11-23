import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMyBookingsComponent } from './all-my-booking.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingsNavigationComponent } from './bookings-navigation/bookings-navigation.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { CityCardsComponent } from './city-cards/city-cards.component';
import { TourActivitiesComponent } from './tour-activities/tour-activities.component';
import { TourCardsComponent } from './Tour-cards/tour-cards.component';
import {NavigationDialogComponent} from '../all-my-booking/navigation-dialog/navigation-dialog.component'

const routes: Routes = [
  {
    path: '', component: AllMyBookingsComponent
  }
]

@NgModule({
  declarations: [
    AllMyBookingsComponent,
    BookingsNavigationComponent,
    MyBookingsComponent,
    CityCardsComponent,
    TourActivitiesComponent,
    TourCardsComponent,
    NavigationDialogComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AllMyBookingModule { }
