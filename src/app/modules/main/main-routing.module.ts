import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
    //   {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    //   },
        {
          path: 'Auth',
          loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
        },
        {
          path: 'carrent',
          loadChildren: () => import('../carrent/carrent.module').then(m => m.CarrentModule)
        },
        // {
        //   path: 'trips/:itineraryId/bookings',
        //   loadChildren: () => import('../itinerary-bookings/itinerary-bookings.module').then(m => m.ItineraryBookingsModule)
        // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
