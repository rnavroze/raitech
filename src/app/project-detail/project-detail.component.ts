import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  toastStyle = {visibility: 'hidden'};
  projectId: number;
  projectsOutput;
  project;
  ready = false;
  imgStyle = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private modalService: NgbModal) {
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
        this.imgStyle = {
          backgroundImage: `url('/assets/projects/${this.project.image}')`
        };
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

  openGallery(content) {
    this.modalService.open(content, {centered: true, size: 'xl'});
    if (window.innerHeight > window.innerWidth) {
      this.toastStyle.visibility = 'visible';
      setTimeout(() => this.toastStyle.visibility = 'hidden', 5000);
    }
  }
}
