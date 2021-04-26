import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrentComponent } from './carrent.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CarrentComponent},
];

@NgModule({
  declarations: [CarrentComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)

  ],
  exports: [
    CarrentComponent
   ]
})
export class CarrentModule { }
