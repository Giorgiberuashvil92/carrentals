import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { LocationPaginatorComponent } from './location-paginator/location-paginator.component';



@NgModule({
  declarations: [
    PaginatorComponent,
    LocationPaginatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginatorComponent,
    LocationPaginatorComponent
  ]
})
export class SharedModule { }
