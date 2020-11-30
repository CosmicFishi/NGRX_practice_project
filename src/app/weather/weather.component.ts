import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  d = this.store.select('weather').subscribe(res => this.data = res )
  data
  constructor(
    private store: Store<{weather:{}}>
  ) { }

  ngOnInit(): void {
    this.store.dispatch({type:'[Weather component] Load Weather'})
  }

}
