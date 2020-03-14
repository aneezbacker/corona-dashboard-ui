import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {GlobalCasesComponent} from './global-cases/global-cases.component';
import {HealthTipsComponent} from './health-tips/health-tips.component';
import {LatestNewsComponent} from './latest-news/latest-news.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TravelComponent} from './travel/travel.component';
import {HelplineComponent} from './helpline/helpline.component';


const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'global-cases', component: GlobalCasesComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'helpline', component: HelplineComponent},
  {path: 'health-tips', component: HealthTipsComponent},
  {path: 'latest-news', component: LatestNewsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
