import { Component } from '@angular/core';
import { EventCard } from '../event-card/event-card';

@Component({
  selector: 'app-events',
  imports: [EventCard],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  events = [
    {
      name: 'Festival de Música',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
      date: '25 AGO',
      location: 'São Paulo, SP',
      price: 89.90
    },
    {
      name: 'Festival de Rock',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063',
      date: '02 SET',
      location: 'Curitiba, PR',
      price: 120
    },
    {
      name: 'Festival Eletrônico',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3',
      date: '15 SET',
      location: 'Porto Alegre, RS',
      price: 75
    }
  ];
}