import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-experiences.html',
  styleUrl: './skills-experiences.css',
})
export class SkillsExperiences {

  currentSkillIndex = 0;
  maxSkillIndex = 1;

  currentExperienceIndex = 0;
  experienceDots = [0, 1, 2]; 

  nextSkill() {
    if (this.currentSkillIndex < this.maxSkillIndex) {
      this.currentSkillIndex++;
    }
  }

  prevSkill() {
    if (this.currentSkillIndex > 0) {
      this.currentSkillIndex--;
    }
  }

  goToExperience(index: number) {
    this.currentExperienceIndex = index;
  }
}
