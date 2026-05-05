import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { AboutComponent } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { SkillsExperiences } from './skills-experiences/skills-experiences';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Header,
    Hero,
    AboutComponent,
    ProjectsComponent,
    SkillsExperiences,
    Contact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'resume';
  showProjects = false;

  toggleProjects() {
    this.showProjects = true;
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}
