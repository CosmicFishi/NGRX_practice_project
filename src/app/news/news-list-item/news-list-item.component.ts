import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { trigger, transition,style,state, animate } from '@angular/animations'

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css'],
  animations: [
    trigger('popUp',[
      state('out', style({'opacity':0})),
      state('in', style({'opacity': 100})),
      transition('* => *', [animate('0.5s ease-in-out')])
    ])
  ]
})
export class NewsListItemComponent implements OnInit {

  @Input() infoObject
  constructor() { }

  ngOnInit(): void {
  }

}
