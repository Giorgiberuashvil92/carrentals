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
    //   {
    //     path: 'dashboard',
    //     loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    //   }
        {
          path: 'all-my-trips',
          loadChildren: () => import('../all-my-trips/all-my-trips.module').then(m => m.AllMyTripsModule)
        },
        {
          path: 'all-my-bookings',
          loadChildren: () => import('../all-my-booking/all-my-booking.module').then(m => m.AllMyBookingModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
