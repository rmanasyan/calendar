import { Routes } from '@angular/router';
import { monthGuard } from './shared/services/month.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [monthGuard],
    children: [],
  },
  {
    path: 'month/:month',
    canActivate: [monthGuard],
    loadComponent: () => import('./month/month.component'),
  },
  {
    path: 'day/:day',
    loadComponent: () => import('./day/day.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
