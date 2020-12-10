import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = 'https://api.covidtracking.com/v1/states/ut/'

  getCurrent() {
    return this.http.get(this.baseURL + 'current.json')
  }
  getInfo() {
    return this.http.get(this.baseURL + 'info.json')
  }

}
