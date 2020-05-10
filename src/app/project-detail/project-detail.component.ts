import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  projectId: number;
  projectsOutput;
  project;
  ready = false;
  imgStyle = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = +params.get('projectId');
    });
    this.http.get('/assets/data/projects.json').pipe(
      retry(2), catchError(this.handleError)
    ).subscribe(res => {
      this.projectsOutput = res;
      this.setProject();
    });
  }

  setProject() {
    if (this.projectsOutput.hasOwnProperty('projects')) {
      this.project = this.projectsOutput.projects.find((x) => x.id === this.projectId);
      if (this.project !== undefined && this.project !== null) {
        this.ready = true;

        if (this.project.id === 1) {
          this.imgStyle = {
            backgroundImage: `url('/assets/projects/${this.project.image}')`
          };
        } else {
          this.imgStyle = {
            backgroundImage: `url('https://picsum.photos/seed/${Math.random()}/652/300')`
          };
        }
      }
    } else {
      // TODO: Error handling
    }
  }

  handleError(error: HttpErrorResponse) {
    // TODO: Error handling
    alert('An error occurred');
    console.error(error);
    return throwError(error);
  }
}
