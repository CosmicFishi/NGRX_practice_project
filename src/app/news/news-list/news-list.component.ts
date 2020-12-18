import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news
  constructor(
    private store: Store<{news:{}}>,  
  ) { }

  ngOnInit(): void {
    this.store.select('news').subscribe(res => this.news = res)
    if(Object.entries(this.news.news).length == 0) {
      this.store.dispatch({type: '[News component] get news'})
    }
  }

}
