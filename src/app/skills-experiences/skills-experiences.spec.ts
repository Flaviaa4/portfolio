import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsExperiences } from './skills-experiences';

describe('SkillsExperiences', () => {
  let component: SkillsExperiences;
  let fixture: ComponentFixture<SkillsExperiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsExperiences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsExperiences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
