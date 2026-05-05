import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-experiences',
  imports: [CommonModule],
  templateUrl: './skills-experiences.html',
  styleUrl: './skills-experiences.css',
})
export class SkillsExperiences {
  @Output() viewProjectsClicked = new EventEmitter<void>();

  currentSlide: number = 0;
  experienceSlide: number = 0;
  experienceDots = [0, 1, 2];

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide < 1) {
      this.currentSlide++;
    }
  }

  goToExperience(index: number) {
    this.experienceSlide = index;
  }

  onViewProjects() {
    this.viewProjectsClicked.emit();
  }
}
