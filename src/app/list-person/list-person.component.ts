import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  list
 
  flag: boolean = false

  constructor(
    private store: Store<{list:{}}>
  ) { }

  ngOnInit(): void {
    this.store.select('list').subscribe(res => this.list = res);
    if(this.list.payload.length == 0)
      this.store.dispatch({type: '[List-person component] get list'});
    }
}
