import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with light mode', () => {
    expect(component.isDarkMode).toBeFalsy();
  });

  it('should toggle dark mode', () => {
    const initialMode = component.isDarkMode;
    component.toggleTheme();
    expect(component.isDarkMode).toBe(!initialMode);
  });

  it('should toggle mobile menu', () => {
    expect(component.isMobileMenuOpen).toBeFalsy();
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen).toBeTruthy();
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen).toBeFalsy();
  });

  it('should close mobile menu', () => {
    component.isMobileMenuOpen = true;
    component.closeMobileMenu();
    expect(component.isMobileMenuOpen).toBeFalsy();
  });
});
