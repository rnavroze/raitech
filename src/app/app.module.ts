import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';
import { LogoComponent } from './home/logo/logo.component';
import { HomeButtonComponent } from './home/home-button/home-button.component';
import { HomeButtonsComponent } from './home/home-buttons/home-buttons.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './about/skills/skills.component';
import { SkillContentsComponent } from './about/skill-contents/skill-contents.component';
import { SkillBarComponent } from './about/skill-bar/skill-bar.component';
import { SkillsTechSkillsComponent } from './about/skills-tech-skills/skills-tech-skills.component';
import { LoadingComponent } from './loading/loading.component';
import { SkillsSoftSkillsComponent } from './about/skills-soft-skills/skills-soft-skills.component';
import { SkillWorkExpComponent } from './about/skill-work-exp/skill-work-exp.component';
import { BbcodeParserPipe } from './about/skill-work-exp/bbcode-parser.pipe';
import { ProjectCardComponent } from './projects/project-card/project-card.component';


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
    FooterComponent,
    ContactComponent,
    SkillsComponent,
    SkillContentsComponent,
    SkillBarComponent,
    SkillsTechSkillsComponent,
    LoadingComponent,
    SkillsSoftSkillsComponent,
    SkillWorkExpComponent,
    BbcodeParserPipe,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'contact', component: ContactComponent}
    ], {scrollPositionRestoration: 'enabled'}),
    FontAwesomeModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
