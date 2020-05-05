import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './home/logo/logo.component';
import { HomeButtonComponent } from './home/home-button/home-button.component';
import { HomeButtonsComponent } from './home/home-buttons/home-buttons.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    HomeButtonComponent,
    HomeButtonsComponent,
    AboutComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'projects', component: ProjectsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
