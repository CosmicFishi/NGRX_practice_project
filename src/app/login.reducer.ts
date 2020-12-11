import { createReducer, on, Action } from '@ngrx/store'
import { login, logOut, setScore, increaseScore, decreaseScore } from './login.action'
import { loadWeather,loadWeatherFailed,loadlWeatherSuccess } from './app.actions'

//Login reducer
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

//Score reducer
export const initScore = { 
    home: 0,
    away: 0
}

const scoreReducer = createReducer( 
    initScore, 
    on(increaseScore, state => ({...state, home: state.home+1})), 
    on(decreaseScore, state => ({...state, away: state.away+1})), 
    on(setScore, state => ({home:0,away:0}))
)

export function ScoreReducer(state, action: Action) { 
    return scoreReducer(state, action)
}

//Weather reducer
export const initWeather = {
    payload: {},
    msg: ''
}

const _weatherReducer = createReducer(
    initWeather, 
    on(loadlWeatherSuccess, (state, {payload}) => ({msg: 'load success', payload: payload})),
    on(loadWeatherFailed, state => ({...state, msg: 'load failed'}))
)

export function weatherReducer(state, action: Action) { 
    return _weatherReducer(state, action)
}
