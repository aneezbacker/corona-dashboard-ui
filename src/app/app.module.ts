import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {GlobalCasesComponent} from './global-cases/global-cases.component';
import {HealthTipsComponent} from './health-tips/health-tips.component';
import {LatestNewsComponent} from './latest-news/latest-news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomePageComponent,
    AboutUsComponent,
    GlobalCasesComponent,
    HealthTipsComponent,
    LatestNewsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
