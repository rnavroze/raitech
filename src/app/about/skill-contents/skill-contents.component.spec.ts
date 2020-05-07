import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillContentsComponent } from './skill-contents.component';

describe('SkillContentsComponent', () => {
  let component: SkillContentsComponent;
  let fixture: ComponentFixture<SkillContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
