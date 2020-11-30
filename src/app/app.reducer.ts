import { createReducer, on, Action } from '@ngrx/store'
import { getListSuccess, getListFailure } from './app.actions'

export const initList = { 
    payload: [], 
    msg: ''
}

export const _ListReducer = createReducer( 
    initList, 
    on(getListSuccess, (state,{payload}) => ({...state,payload: payload})),
    on(getListFailure, (state) => ({...state,msg:'failed to get list'}))
)

export function ListReducer(state , action:Action) { 
    return _ListReducer(state, action)
}