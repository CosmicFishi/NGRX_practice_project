import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username
  
  constructor(
    private store: Store<{name: string}>
  ) { 
    store.select("name").subscribe(res => this.username = res)
   }

  ngOnInit(): void {}

  onClick(name:string):void { 
    this.store.dispatch(login({username:name}))
  }

}
