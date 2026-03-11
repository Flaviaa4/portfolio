import { ComponentFixture, TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display timeline items', () => {
    const compiled = fixture.nativeElement;
    const timelineItems = compiled.querySelectorAll('.timeline-item');
    expect(timelineItems.length).toBeGreaterThan(0);
  });

  it('should have download CV button', () => {
    const compiled = fixture.nativeElement;
    const cvButton = compiled.querySelector('.cv-button');
    expect(cvButton).toBeTruthy();
  });
});
