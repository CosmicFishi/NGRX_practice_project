//list
import { createReducer, on, Action } from '@ngrx/store'
import { getListSuccess, getListFailure, getCurrentFailure, getCurrentSuccess, getInfoSuccess, getInfoFailure, getNewsSuccess, getNewsFailure } from './app.actions'

export const initList = { 
    payload: [], 
    msg: ''
}

export const _ListReducer = createReducer( 
    initList, 
    on(getListSuccess, (state,{payload}) => ({...state,payload: payload})),
    on(getListFailure, (state) => ({...state,msg:'failed to get list'}))
)

//Info
export function ListReducer(state , action:Action) { 
    return _ListReducer(state, action)
}

export const initInfo = {
    current: {},
    info: {},
    msgCurrent: '', 
    msgInfo: ''
}

export const _infoReducer = createReducer(
    initInfo, 
    on(getCurrentSuccess, (state,{payload}) => ({...state, current: payload})), 
    on(getCurrentFailure, state => ({...state, msgCurrent: 'failed to get current'})),
    on(getInfoSuccess, (state, {payload}) => ({...state, info: payload})),
    on(getInfoFailure, state => ({...state, msgInfo: 'failed to get info'}))
)
export function infoReducer(state, action: Action) {
    return _infoReducer(state, action)
}

//News
export const initNews = {
    news: {},
    msg: ''
}
export const _NewsReducer = createReducer(
    initNews, 
    on(getNewsSuccess, (state,{payload}) => ({...state, news: payload})),
    on(getNewsFailure, (state,) => ({...state, msg: 'failed to get news'})),
)
export function NewsReducer(state, action: Action) { 
    return _NewsReducer(state, action);
}