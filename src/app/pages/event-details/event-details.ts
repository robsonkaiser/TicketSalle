import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css'
})
export class EventDetails {

  // ID recebido pela URL
  id = '';

  // Lista temporária de eventos
  // Futuramente esses dados virão da API
  events = [
    {
      id: 1,
      name: 'Festival de Música',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
      category: 'Música',
      description: 'Uma experiência incrível com música, diversão e muita energia.',
      date: '25 de Agosto',
      time: '20:00',
      location: 'São Paulo, SP',
      venue: 'Espaço das Américas',
      price: 89.90
    },
    {
      id: 2,
      name: 'Festival Eletrônico',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3',
      category: 'Eletrônica',
      description: 'Uma noite de música eletrônica com grandes artistas.',
      date: '12 de Setembro',
      time: '22:00',
      location: 'Rio de Janeiro, RJ',
      venue: 'Riocentro',
      price: 129.90
    },
    {
      id: 3,
      name: 'Festival de Rock',
      image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b',
      category: 'Rock',
      description: 'Muito rock, grandes bandas e uma experiência inesquecível.',
      date: '5 de Outubro',
      time: '19:00',
      location: 'Curitiba, PR',
      venue: 'Live Curitiba',
      price: 99.90
    }
  ];

  // Evento encontrado pelo ID
  event = this.events[0];

  constructor(private route: ActivatedRoute) {
    // Pega o ID presente na URL
    this.id = this.route.snapshot.paramMap.get('id') ?? '';

    // Procura o evento correspondente
    const foundEvent = this.events.find(
      event => event.id === Number(this.id)
    );

    // Se encontrou, usa o evento encontrado
    if (foundEvent) {
      this.event = foundEvent;
    }
  }
}