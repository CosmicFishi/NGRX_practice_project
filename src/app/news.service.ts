import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient,
  ) { }

  baseURL = "http://newsapi.org/v2/top-headlines"

  getNews() {
    return this.http.get(this.baseURL + '?country=AU&category=business&apiKey=d8be957824d14c1387a3217ab74f2dcb')
  }
}
