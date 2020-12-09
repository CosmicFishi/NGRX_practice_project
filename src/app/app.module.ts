import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { reducer, ScoreReducer, weatherReducer } from './login.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ProfileComponent } from './profile/profile.component';
import { ScoreComponent } from './score/score.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ListEffect, WeatherEffect } from './app.effects';
import { WeatherComponent } from './weather/weather.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ListReducer } from './app.reducer';
import { ListCardComponent } from './list-card/list-card.component';
import { GsapExampleComponent } from './gsap-example/gsap-example.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ScoreComponent,
    WeatherComponent,
    ListPersonComponent,
    ListCardComponent,
    GsapExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    StoreModule.forRoot({name: reducer, score: ScoreReducer, weather: weatherReducer, list: ListReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([WeatherEffect, ListEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
