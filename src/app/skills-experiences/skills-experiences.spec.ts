import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsExperiences } from './skills-experiences';

describe('SkillsExperiences', () => {
  let component: SkillsExperiences;
  let fixture: ComponentFixture<SkillsExperiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsExperiences],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsExperiences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start at first skill slide', () => {
    expect(component.currentSkillIndex).toBe(0);
  });

  it('should navigate to next skill slide', () => {
    component.nextSkill();
    expect(component.currentSkillIndex).toBe(1);
  });

  it('should not go beyond max skill index', () => {
    component.currentSkillIndex = component.maxSkillIndex;
    component.nextSkill();
    expect(component.currentSkillIndex).toBe(component.maxSkillIndex);
  });

  it('should navigate to previous skill slide', () => {
    component.currentSkillIndex = 1;
    component.prevSkill();
    expect(component.currentSkillIndex).toBe(0);
  });

  it('should not go below zero on prevSkill', () => {
    component.currentSkillIndex = 0;
    component.prevSkill();
    expect(component.currentSkillIndex).toBe(0);
  });

  it('should start at first experience', () => {
    expect(component.currentExperienceIndex).toBe(0);
  });

  it('should navigate to specific experience', () => {
    component.goToExperience(2);
    expect(component.currentExperienceIndex).toBe(2);
  });

  it('should have 3 experience dots', () => {
    expect(component.experienceDots.length).toBe(3);
  });
});
