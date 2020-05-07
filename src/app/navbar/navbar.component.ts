import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navUnderline') navUnderline: ElementRef;
  @ViewChild('navbar') navbar: ElementRef;
  @ViewChildren('navItem') navLinks: QueryList<ElementRef>;
  navElemMap: any = {};
  currentPage: string;

  constructor(private router: Router, private renderer: Renderer2) {
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
        this.setNavVisibility(this.currentPage);
        this.setBodyBackground(this.currentPage);
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

  setNavVisibility(page: string): void {
    console.log(page);
    if (page === 'home') {
      setTimeout(() => this.navbar.nativeElement.style.visibility = 'hidden', 500);
    }
    else {
      this.navbar.nativeElement.style.visibility = 'visible';
    }
    console.log(this.navbar.nativeElement.style);
  }

  setBodyBackground(page: string): void {
    // I would prefer a way to iterate through the body's classes and remove any classes starting with bg-,
    // however it looks like renderer2 is only one-way and I don't want to complicate this solution
    this.renderer.removeClass(document.body, 'bg-home');
    this.renderer.removeClass(document.body, 'bg-about');
    this.renderer.removeClass(document.body, 'bg-projects');
    this.renderer.removeClass(document.body, 'bg-contact');

    this.renderer.addClass(document.body, `bg-${page}`);
  }

  setNavbarWidthOnResize(): void {
    this.setUnderlinePosition(this.currentPage);
  }

  setNavbarBackgroundOnScroll(event): void {
    if (window.pageYOffset > 1) {
      this.renderer.addClass(this.navbar.nativeElement, 'nav-with-bg');
    } else {
      this.renderer.removeClass(this.navbar.nativeElement, 'nav-with-bg');
    }
  }

}
