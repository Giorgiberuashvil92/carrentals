import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { LocationPaginatorComponent } from './location-paginator/location-paginator.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    PaginatorComponent,
    LocationPaginatorComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginatorComponent,
    LocationPaginatorComponent,
    CalendarComponent
  ]
})
export class SharedModule { }
