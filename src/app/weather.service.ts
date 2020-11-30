import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private key = '06a9fe2ddf0c8e6085a0f7e15eb44125'

  constructor(
    private http :HttpClient
  ) { }

  public getWeatherData() { 
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${this.key}&units=metric`).pipe(tap(data => console.log(data)))
  }
}
