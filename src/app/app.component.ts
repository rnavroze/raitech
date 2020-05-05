import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './fade.animation';

@Component({
  selector: 'app-root',
  animations: [fadeAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'RaiTech';

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // TODO: Make this check which page it is on, only on home this matters
    this.renderer.addClass(document.body, 'hide-overflow');
    setTimeout(() => { this.renderer.removeClass(document.body, 'hide-overflow'); }, 2000);
    // https://stackoverflow.com/questions/46670795/how-to-change-whole-page-background-color-in-angular
  }

  prepareRoute(outlet: RouterOutlet) {
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
