import { Component, OnInit } from '@angular/core';
import { reduceState, Store } from '@ngrx/store';
import { increaseScore,decreaseScore,setScore } from '../login.action';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score

  constructor(
    private store: Store<{score:{}}>
  ) { 
    store.select("score").subscribe(res => this.score = res )
  }

  ngOnInit(): void {
  }
  onIncrease():void { 
    this.store.dispatch(increaseScore())
  }
  onDecrease():void { 
    this.store.dispatch(decreaseScore())
  }
  onReset():void { 
    if(this.score.home != 0 || this.score.away != 0)
      this.store.dispatch(setScore())
  }

}
