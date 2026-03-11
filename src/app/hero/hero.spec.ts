import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the hero title', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('.hero-title');
    expect(title?.textContent).toContain("I'm Flavienne");
  });

  it('should display the subtitle', () => {
    const compiled = fixture.nativeElement;
    const subtitle = compiled.querySelector('.hero-subtitle');
    expect(subtitle?.textContent).toContain('Aspiring Front-End Developer');
  });

  it('should have social links', () => {
    const compiled = fixture.nativeElement;
    const socialLinks = compiled.querySelectorAll('.social-link');
    expect(socialLinks.length).toBe(2);
  });
});
