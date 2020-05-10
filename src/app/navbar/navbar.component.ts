import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

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
  pages: string[] = ['home', 'about', 'projects', 'contact'];

  constructor(private router: Router, private renderer: Renderer2, private meta: Meta) {
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
        this.setMetaTags(this.currentPage, 'dk');
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
    if (page === 'home') {
      setTimeout(() => this.navbar.nativeElement.style.visibility = 'hidden', 500);
    } else {
      this.navbar.nativeElement.style.visibility = 'visible';
    }
  }

  setBodyBackground(page: string): void {
    // I would prefer a way to iterate through the body's classes and remove any classes starting with bg-,
    // however it looks like renderer2 is only one-way and I don't want to complicate this solution
    for (const pageName of this.pages) {
      this.renderer.removeClass(document.body, `bg-${pageName}`);
    }

    this.renderer.addClass(document.body, `bg-${page}`);
  }

  setNavbarWidthOnResize(): void {
    this.setUnderlinePosition(this.currentPage);
  }

  setNavbarBackgroundOnScroll(event): void {
    if (window.pageYOffset > 1) {
      this.setNavbarBackground(true, this.currentPage);
      // this.setMetaTags(this.currentPage, 'lt');
    } else {
      this.setNavbarBackground(false);
      // this.setMetaTags(this.currentPage, 'dk');
    }
  }

  setNavbarBackground(setColor: boolean, page?: string): void {
    for (const pageName of this.pages) {
      this.renderer.removeClass(this.navbar.nativeElement, `nav-bg-${pageName}`);
    }

    if (setColor) {
      this.renderer.addClass(this.navbar.nativeElement, `nav-bg-${page}`);
    }
  }

  setMetaTags(page: string, theme: string): void {
    // I'm not happy about hardcoding the colour values here especially since I did such
    // a good job using CSS on everything else, however the only other option is this
    // complex scss2json converter:
    const colors = {
      'blue-lt': '#427ca6',
      'blue-dk': '#2b506b',
      'purple-lt': '#a54a9f',
      'purple-dk': '#592856',
      'green-lt': '#1ca697',
      'green-dk': '#116b62',
      'orange-lt': '#f26e21',
      'orange-dk': '#8A3F13'
    };

    const thisColor = page === 'about' ? colors[`purple-${theme}`]
      : page === 'projects' ? colors[`green-${theme}`]
        : page === 'contact' ? colors[`orange-${theme}`]
          : colors[`blue-${theme}`];

    this.meta.updateTag({name: 'theme-color', content: thisColor},
      `name='theme-color'`);

    this.meta.updateTag({name: 'msapplication-navbutton-color', content: thisColor},
      `name='msapplication-navbutton-color'`);

    this.meta.updateTag({name: 'apple-mobile-web-app-status-bar-style', content: thisColor},
      `name='apple-mobile-web-app-status-bar-style'`);
  }

}
