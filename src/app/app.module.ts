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
import {MetricsComponent} from './components/metric-components/metrics/metrics.component';
import {MetricDetailComponent} from './components/metric-components/metric-detail/metric-detail.component';
import {KeywordDetailComponent} from './components/keyword-components/keyword-detail/keyword-detail.component';
import {KeywordsComponent} from './components/keyword-components/keywords/keywords.component';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatProgressBarModule, MatProgressSpinnerModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BackButtonComponent } from './components/utilities/back-button/back-button.component';

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
    KeywordsComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
