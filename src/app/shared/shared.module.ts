import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';

@NgModule({
  declarations: [
    PaginatorComponent,
    DatepickerComponent,
    LoaderComponent,
    SearchBarComponent,
    MatDialogComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginatorComponent,
    DatepickerComponent,
    LoaderComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
