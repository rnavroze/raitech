import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSoftSkillsComponent } from './skills-soft-skills.component';

describe('SkillsSoftSkillsComponent', () => {
  let component: SkillsSoftSkillsComponent;
  let fixture: ComponentFixture<SkillsSoftSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsSoftSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
