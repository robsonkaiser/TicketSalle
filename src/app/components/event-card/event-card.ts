import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css'
})
export class EventCard {
  @Input() name = '';
  @Input() image = '';
  @Input() date = '';
  @Input() location = '';
  @Input() price = 0;
}