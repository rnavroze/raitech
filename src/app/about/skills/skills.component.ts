import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { fadeAnimationSmall } from '../../fade.animation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  animations: [fadeAnimationSmall],
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any = {};
  selectedTab: string;
  firstRun = true;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/assets/data/skills.json').pipe(
      retry(2), catchError(this.handleError)
    ).subscribe(res => {
      this.skills = res;
      setTimeout(() => this.firstRun = false, 1000);
    });
  }

  handleError(error: HttpErrorResponse) {
    // TODO: Error handling
    alert('An error occurred');
    console.error(error);
    return throwError(error);
  }

  animateTabChange(event) {
    this.selectedTab = event;
  }

  getCurrentTab() {
    return this.selectedTab;
  }
}
