import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header,Hero],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'resume';
}
