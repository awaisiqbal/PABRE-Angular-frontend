import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatternsComponent} from './components/pattern-components/patterns/patterns.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PatternDetailComponent} from './components/pattern-components/pattern-detail/pattern-detail.component';
import {MetricsComponent} from './components/metric-components/metrics/metrics.component';
import {MetricDetailComponent} from './components/metric-components/metric-detail/metric-detail.component';
import {KeywordsComponent} from './components/keyword-components/keywords/keywords.component';
import {KeywordDetailComponent} from './components/keyword-components/keyword-detail/keyword-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'keywords', component: KeywordsComponent},
  {path: 'keywords/:id', component: KeywordDetailComponent},
  {path: 'metrics', component: MetricsComponent},
  {path: 'metrics/:id', component: MetricDetailComponent},
  {path: 'patterns', component: PatternsComponent},
  {path: 'patterns/:id', component: PatternDetailComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
