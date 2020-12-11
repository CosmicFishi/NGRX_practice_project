import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidPanelComponent } from './covid-panel/covid-panel.component';
import { GsapExampleComponent } from './gsap-example/gsap-example.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { LoginComponent } from './login/login.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: '', component:LoginComponent }, 
  {path: 'profile', component: ProfileComponent},
  {path: 'weather', component: WeatherComponent}, 
  {path: 'list', component: ListPersonComponent}, 
  {path: 'news', loadChildren: () => import(`./news/news-routing.module`).then(m => m.NewsRoutingModule)},
  {path: 'gsap-example', component: GsapExampleComponent}, 
  {path: 'covid', component: CovidPanelComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
