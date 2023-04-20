import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../auth/guards/auth.guard';
import { AppFrameComponent } from './app-frame.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'moments',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppFrameComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./../dashboard/dashboard-page/dashboard-page.component').then((x) => x.DashboardPageComponent),

      },
      {
        path: 'map',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import('./../map/map-page/map-page.component').then((x) => x.MapPageComponent),

      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./../user/profile-page/profile-page.component').then((x) => x.ProfilePageComponent),

      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppFrameRoutingModule { }
