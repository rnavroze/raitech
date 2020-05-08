import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillWorkExpComponent } from './skill-work-exp.component';

describe('SkillWorkExpComponent', () => {
  let component: SkillWorkExpComponent;
  let fixture: ComponentFixture<SkillWorkExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillWorkExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillWorkExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
