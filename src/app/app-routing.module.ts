import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)},
  { path: 'redirect', loadChildren: () => import('./modules/redirect/redirect.module').then(m => m.RedirectModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
