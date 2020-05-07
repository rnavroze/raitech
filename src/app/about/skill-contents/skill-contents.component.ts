import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-contents',
  templateUrl: './skill-contents.component.html',
  styleUrls: ['./skill-contents.component.scss']
})
export class SkillContentsComponent implements OnInit {
  @Input() skills: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
