import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    (event.target as HTMLFormElement).reset();
  }
}
