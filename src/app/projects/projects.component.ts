import { Component, OnInit } from '@angular/core';
import { fadeAnimationSmall } from '../fade.animation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  animations: [fadeAnimationSmall],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedTab: string;

  constructor() { }

  ngOnInit(): void {
  }

  animateTabChange(event) {
    this.selectedTab = event;
  }

  getCurrentTab() {
    return this.selectedTab;
  }
}
