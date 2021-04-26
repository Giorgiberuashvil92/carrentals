import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from 'src/app/core/services/guard.guard';
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
    //   },n
        {
          path: 'carrent',
          loadChildren: () => import('../carrent/carrent.module').then(m => m.CarrentModule),
        },
        {
          path: 'home',
          loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
        },
        {
          path: 'login',
          loadChildren: () => import('../login/login.module').then(m => m.LoginModule),

        },
        {
          path: 'register',
          loadChildren: () => import('../register/register.module').then(m => m.RegisterModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
