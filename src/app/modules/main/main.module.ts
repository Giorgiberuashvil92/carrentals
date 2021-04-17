import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/desktop/header.component';
import { FooterComponent } from './footer/desktop/footer.component';
import { FooterMobileComponent } from './footer/mobile/footer-mobile.component';
import { HeaderMobileComponent } from './header/mobile/header-mobile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarrentModule } from '../carrent/carrent.module';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [MainComponent,
     HeaderComponent,
     FooterComponent,
     FooterMobileComponent,
     HeaderMobileComponent,
     ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    CarrentModule,
    MatSelectModule
  ]
})
export class MainModule { }
