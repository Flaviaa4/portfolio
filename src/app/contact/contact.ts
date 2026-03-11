import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    alert('Thank you for your message! I will get back to you soon.');
    this.contactForm.reset();
    this.submitted = false;
  }

  getErrorMessage(field: string): string {
    const control = this.contactForm.get(field);

    if (control?.hasError('required')) {
      return `${this.capitalizeFirst(field)} cannot be empty`;
    }
    if (control?.hasError('minlength')) {
      return `${this.capitalizeFirst(field)} should be at least 6 characters`;
    }
    if (control?.hasError('email')) {
      return 'Email should contain @ and a valid domain';
    }
    return '';
  }

  isFieldValid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control?.valid && (control?.dirty || this.submitted));
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control?.invalid && (control?.dirty || this.submitted));
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
