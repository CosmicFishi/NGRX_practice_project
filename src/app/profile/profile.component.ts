import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'], 
  animations: [ 
    trigger('text', [
      state('visable',style({
        'stroke-dashoffset':'400', 
      })), 
      state('invisable', style({
        'stroke-dashoffset':'0', 
      })), 
      transition('visable <=> invisable', [
        animate('3.5s'), 
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {

  toggle: boolean = false
  username: string
  name1
  constructor(
    private store : Store<{name:string}> 
  ) {}

  ngOnInit(): void {
    this.store.select('name').subscribe(res => this.name1 = res)
  }

  onClick():void { 
    // console.log(this.toggle)
    this.toggle = !this.toggle;
  }
  onEnd(event:Event):void { 
    this.toggle = !this.toggle;
  }

}
