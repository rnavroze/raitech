import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faCookieBite = faCookieBite;
  date: Date = new Date();
  @ViewChild('footer') footer: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((routerData) => {
      if (routerData instanceof ResolveEnd) {
        const currentPage = routerData.url === '/' ? 'home' : routerData.url.split('/')[1];
        if (currentPage === 'home') {
          this.renderer.addClass(this.footer.nativeElement, 'footer-dark');
          this.renderer.removeClass(this.footer.nativeElement, 'footer-bright');
        } else {
          this.renderer.removeClass(this.footer.nativeElement, 'footer-dark');
          this.renderer.addClass(this.footer.nativeElement, 'footer-bright');
        }
      }
    });
  }

}
