import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'resume' title`, () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('resume');
  });

  it('should render hero section with title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-title')?.textContent).toContain("I'm Flavienne");
  });

  it('should render all main sections', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-hero')).toBeTruthy();
    expect(compiled.querySelector('app-about')).toBeTruthy();
    expect(compiled.querySelector('app-skills-experiences')).toBeTruthy();
    expect(compiled.querySelector('app-contact')).toBeTruthy();
  });
});
