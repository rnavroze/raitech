import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navUnderline') navUnderline: ElementRef;
  @ViewChildren('navItem') navLinks: QueryList<ElementRef>;
  navElemMap: any = {};
  currentPage: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.navLinks.forEach((el) => {
      const navElemName = el.nativeElement.getAttribute('data-name');
      this.navElemMap[navElemName] = el;
    });

    this.setUnderlinePosition('about');
    this.router.events.subscribe((routerData) => {
      if (routerData instanceof ResolveEnd) {
        // /projects/4 => projects
        this.currentPage = routerData.url === '/' ? 'home' : routerData.url.split('/')[1];
        this.setUnderlinePosition(this.currentPage);
      }
    });
  }

  setUnderlinePosition(page: string): void {
    if (!this.navElemMap.hasOwnProperty(page)) {
      console.error('Invalid page');
      return;
    }
    const currentNavElem = this.navElemMap[page].nativeElement;
    const elemLeft = currentNavElem.offsetLeft - 10;
    const elemWidth = currentNavElem.clientWidth + 20;
    const elemTop = currentNavElem.offsetTop + currentNavElem.offsetHeight;

    const navUnderlineElem = this.navUnderline.nativeElement;
    navUnderlineElem.style.left = elemLeft + 'px';
    navUnderlineElem.style.width = elemWidth + 'px';
    navUnderlineElem.style.top = elemTop + 'px';
  }

  fixWidthOnResize(): void {
    this.setUnderlinePosition(this.currentPage);
  }

}
