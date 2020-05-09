import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { fadeAnimationProjects } from '../fade.animation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  animations: [fadeAnimationProjects],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedTab: string;
  ready = false;
  projectsOutput: any;
  projects: any;
  catArray: number[] = [];
  categories: Map<number, string>;
  projectsByCat: Map<number, any[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/assets/data/projects.json').pipe(
      retry(2), catchError(this.handleError)
    ).subscribe(res => {
      this.projectsOutput = res;
      this.arrangeProjects();
      this.ready = true;
    });
  }

  handleError(error: HttpErrorResponse) {
    // TODO: Error handling
    alert('An error occurred');
    console.error(error);
    return throwError(error);
  }

  arrangeProjects() {
    // TODO: Error handling
    this.categories = new Map<number, string>();
    this.projectsByCat = new Map<number, any[]>();
    for (const cat of this.projectsOutput.categories) {
      this.categories.set(cat.id, cat.name);
      this.projectsByCat.set(cat.id, []);
      this.catArray.push(cat.id);
    }

    this.projects = this.projectsOutput.projects.sort((a, b) => b.order - a.order);
    for (const proj of this.projects) {
      // TSLint note: This is a "const" because it holds a reference to an array
      const currProjCat = this.projectsByCat.get(proj.category);
      currProjCat.push(proj);
      this.projectsByCat.set(proj.category, currProjCat);
    }
  }

  animateTabChange(event) {
    this.selectedTab = event;
  }

  getCurrentTab() {
    return this.selectedTab;
  }
}
