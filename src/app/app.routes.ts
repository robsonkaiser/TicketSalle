import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { EventDetails } from './pages/event-details/event-details';

export const routes: Routes = [
  {
    path: 'evento/:id',
    component: EventDetails
  },
  {
    path: '',
    component: Home
  }
];