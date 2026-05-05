import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  @Output() viewProjectsClicked = new EventEmitter<void>();

  onViewProjects() {
    this.viewProjectsClicked.emit();
  }
}
