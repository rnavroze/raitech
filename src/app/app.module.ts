import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './home/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
