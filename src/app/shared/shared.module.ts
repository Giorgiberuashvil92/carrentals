import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { LocationPaginatorComponent } from './location-paginator/location-paginator.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    PaginatorComponent,
    LocationPaginatorComponent,
    CalendarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    PaginatorComponent,
    LocationPaginatorComponent,
    CalendarComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
