import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ScoreComponent } from './score/score.component';
import { WeatherComponent } from './weather/weather.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ListCardComponent } from './list-card/list-card.component';
import { GsapExampleComponent } from './gsap-example/gsap-example.component';
import { CovidPanelComponent } from './covid-panel/covid-panel.component';
import { ServiceWorkerModule } from '@angular/service-worker'

import { reducer, ScoreReducer, weatherReducer } from './login.reducer'
import { infoReducer, ListReducer, NewsReducer } from './app.reducer';
import { InfoEffect, ListEffect, NewsEffects, WeatherEffect } from './app.effects';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ScoreComponent,
    WeatherComponent,
    ListPersonComponent,
    ListCardComponent,
    GsapExampleComponent,
    CovidPanelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    StoreModule.forRoot({name: reducer, score: ScoreReducer, weather: weatherReducer, list: ListReducer, info: infoReducer, news: NewsReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([WeatherEffect, ListEffect, InfoEffect, NewsEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
