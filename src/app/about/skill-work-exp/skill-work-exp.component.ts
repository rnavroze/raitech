import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-work-exp',
  templateUrl: './skill-work-exp.component.html',
  styleUrls: ['./skill-work-exp.component.scss']
})
export class SkillWorkExpComponent implements OnInit {
  @Input() workExp;

  constructor() { }

  ngOnInit(): void {
  }

}
