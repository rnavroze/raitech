import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-soft-skills',
  templateUrl: './skills-soft-skills.component.html',
  styleUrls: ['./skills-soft-skills.component.scss']
})
export class SkillsSoftSkillsComponent implements OnInit {
  @Input() softSkills;

  constructor() { }

  ngOnInit(): void {
  }

}
