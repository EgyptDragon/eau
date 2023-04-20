import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./app-frame/app-frame.module').then((x) => x.AppFrameModule),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login-page/login-page.component').then((x) => x.LoginPageComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
