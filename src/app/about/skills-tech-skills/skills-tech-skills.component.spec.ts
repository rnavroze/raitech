import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTechSkillsComponent } from './skills-tech-skills.component';

describe('SkillsTechSkillsComponent', () => {
  let component: SkillsTechSkillsComponent;
  let fixture: ComponentFixture<SkillsTechSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsTechSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTechSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
