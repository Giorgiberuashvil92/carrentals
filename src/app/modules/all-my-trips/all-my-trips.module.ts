import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMyTripsComponent } from './all-my-trips.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: AllMyTripsComponent
  }
]

@NgModule({
  declarations: [AllMyTripsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AllMyTripsModule { }
