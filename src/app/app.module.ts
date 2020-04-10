import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {GlobalCasesComponent} from './global-cases/global-cases.component';
import {HealthTipsComponent} from './health-tips/health-tips.component';
import {LatestNewsComponent} from './latest-news/latest-news.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SummaryDataBoxComponent} from './summary-data-box/summary-data-box.component';
import {TravelComponent} from './travel/travel.component';
import {HelplineComponent} from './helpline/helpline.component';
import {HumourComponent} from './humour/humour.component';
import {TestingCentresComponent} from './testing-centres/testing-centres.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {DeferLoadModule} from '@trademe/ng-defer-load';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomePageComponent,
    AboutUsComponent,
    GlobalCasesComponent,
    HealthTipsComponent,
    LatestNewsComponent,
    PageNotFoundComponent,
    SummaryDataBoxComponent,
    TravelComponent,
    HelplineComponent,
    HumourComponent,
    TestingCentresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatBadgeModule,
    MatTabsModule,
    MatExpansionModule,
    MatSnackBarModule,
    DeferLoadModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
