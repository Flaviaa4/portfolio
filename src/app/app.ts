import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { SkillsExperiences } from './skills-experiences/skills-experiences';
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, About, SkillsExperiences, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'resume';
}
