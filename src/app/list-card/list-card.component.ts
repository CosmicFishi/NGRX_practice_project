import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'], 
  animations: [
    trigger('popUp',[
      state('out', style({'opacity':0})),
      state('in', style({'opacity': 100})),
      transition('* => *', [animate('0.5s ease-in-out')])
    ])
  ]
})
export class ListCardComponent implements OnInit,OnDestroy {

  @Input() p;
  flag: boolean = false

  constructor() { }

  ngOnInit(): void {
    // setTimeout(()=>)
    this.flag = true
  } 
  ngOnDestroy(): void {
    this.flag = false; 
  }



}
