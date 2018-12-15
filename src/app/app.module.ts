import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PatternsComponent} from './components/pattern-components/patterns/patterns.component';
import {PatternDetailComponent} from './components/pattern-components/pattern-detail/pattern-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { MetricsComponent } from './components/metric-components/metrics/metrics.component';
import { MetricDetailComponent } from './components/metric-components/metric-detail/metric-detail.component';
import { KeywordDetailComponent } from './components/keyword-components/keyword-detail/keyword-detail.component';
import { KeywordsComponent } from './components/keyword-components/keywords/keywords.component';

@NgModule({
  declarations: [
    AppComponent,
    PatternsComponent,
    PatternDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MetricsComponent,
    MetricDetailComponent,
    KeywordDetailComponent,
    KeywordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
