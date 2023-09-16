import { Routes } from '@angular/router';
import { monthGuard } from './shared/services/month.guard';
import { dayGuard } from './shared/services/day.guard';

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
    canActivate: [dayGuard],
    loadComponent: () => import('./day/day.component'),
  },
  {
    path: 'event',
    loadComponent: () => import('./event/event.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
