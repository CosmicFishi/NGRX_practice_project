import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-covid-panel',
  templateUrl: './covid-panel.component.html',
  styleUrls: ['./covid-panel.component.css']
})
export class CovidPanelComponent implements OnInit {

  info
  constructor(
    private store: Store<{info:{}}>
  ) { 
    
  }

  ngOnInit(): void {
    this.store.select('info').subscribe(res => this.info = res)
    if(Object.entries(this.info.current).length == 0) {
      this.store.dispatch({type:'[Info component] get current'})
    }
    if(Object.entries(this.info.info).length == 0) {
      this.store.dispatch({type:'[Info component] get info'})
    }
  }

}
