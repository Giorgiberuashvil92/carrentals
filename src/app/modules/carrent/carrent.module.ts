import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrentComponent } from './carrent.component';

@NgModule({
  declarations: [CarrentComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CarrentComponent
   ]
})
export class CarrentModule { }
