import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 3 controls', () => {
    expect(component.contactForm.contains('name')).toBeTruthy();
    expect(component.contactForm.contains('email')).toBeTruthy();
    expect(component.contactForm.contains('message')).toBeTruthy();
  });

  it('should make name required', () => {
    const name = component.contactForm.get('name');
    name?.setValue('');
    expect(name?.valid).toBeFalsy();
    expect(name?.hasError('required')).toBeTruthy();
  });

  it('should require name to be at least 6 characters', () => {
    const name = component.contactForm.get('name');
    name?.setValue('John');
    expect(name?.hasError('minlength')).toBeTruthy();

    name?.setValue('John Doe');
    expect(name?.hasError('minlength')).toBeFalsy();
  });

  it('should validate email format', () => {
    const email = component.contactForm.get('email');
    email?.setValue('invalid');
    expect(email?.hasError('email')).toBeTruthy();

    email?.setValue('test@example.com');
    expect(email?.hasError('email')).toBeFalsy();
  });

  it('should require message to be at least 6 characters', () => {
    const message = component.contactForm.get('message');
    message?.setValue('Hi');
    expect(message?.hasError('minlength')).toBeTruthy();

    message?.setValue('Hello there!');
    expect(message?.hasError('minlength')).toBeFalsy();
  });

  it('should not submit invalid form', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should submit valid form', () => {
    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, I would like to connect!',
    });

    expect(component.contactForm.valid).toBeTruthy();
  });

  it('should return correct error messages', () => {
    const name = component.contactForm.get('name');
    name?.setValue('');
    name?.markAsDirty();

    expect(component.getErrorMessage('name')).toBe('Name cannot be empty');

    name?.setValue('John');
    expect(component.getErrorMessage('name')).toBe('Name should be at least 6 characters');
  });
});
