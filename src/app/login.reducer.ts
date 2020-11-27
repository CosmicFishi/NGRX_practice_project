import { createReducer, on, Action } from '@ngrx/store'
import { login, logOut, setScore, increaseScore, decreaseScore } from './login.action'

//kế thừa interface 
export const initState = { 
    username: "",
}

const loginReducer = createReducer(
    initState, 
    //login need username => input username via object 
    //object username base on login.action.ts
    on(login, (state, {username})=> ({username: username})),  
    on(logOut, state => ({username:''}))
    
)

export function reducer(state, action: Action) { 
    return loginReducer(state,action)
}

export const initScore = { 
    home: 0,
    away: 0
}

const scoreReducer = createReducer( 
    initScore, 
    on(increaseScore, state => ({...state, away: state.away+1})), 
    on(decreaseScore, state => ({...state, home: state.home+1})), 
    on(setScore, state => ({home:0,away:0}))

)
export function ScoreReducer(state, action: Action) { 
    return scoreReducer(state, action)
}