import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/data/skills.json').pipe(
      retry(2), catchError(this.handleError)
    ).subscribe(res => this.skills = res);
  }

  handleError(error: HttpErrorResponse) {
    // TODO: Error handling
    alert('An error occurred');
    console.error(error);
    return throwError(error);
  }

}
