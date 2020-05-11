import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: any;
  style;

  constructor() { }

  ngOnInit(): void {
    this.style = {
      backgroundImage: `url('/assets/projects/${this.project.image}')` // https://picsum.photos/seed/${Math.random()}/652/300
    };
  }
}
