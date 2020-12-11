import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsRoutingModule } from './news-routing.module';



@NgModule({
  declarations: [
    NewsListComponent, 
    NewsListItemComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    NewsRoutingModule
  ], 
  exports: [
    NewsListComponent, 
    NewsListItemComponent
  ]
})
export class NewsModule { }
