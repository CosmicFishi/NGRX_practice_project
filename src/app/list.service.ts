import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseUrl = 'https://5f0453b88b06d60016dde5a4.mockapi.io'

  constructor(
    private http: HttpClient
  ) { }

  getList() { 
    return this.http.get(`${this.baseUrl}/person`)
  }
}
