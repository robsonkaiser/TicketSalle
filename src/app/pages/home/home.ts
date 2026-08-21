import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Events } from '../../components/events/events';

@Component({
  selector: 'app-home',
  imports: [Hero, Events],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
