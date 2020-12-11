import { createAction, props } from '@ngrx/store'

export const loadWeather = createAction( 
    '[Weather component] Load Weather', 
)

export const loadWeatherFailed = createAction( 
    '[Weather Component] Load Error', 
)

export const loadlWeatherSuccess = createAction( 
    '[Weather Component] Load Success',
    props<{payload:{}}>()
)

//List-person
export const getList = createAction(
    '[List-person component] get list'
)
export const getListSuccess = createAction( 
    '[List-person component] get list successful', 
    props<{payload:any}>()
)
export const getListFailure = createAction( 
    '[List-person component] get list failed'
)

//covid info
export const getCurrent = createAction(
    '[Info component] get current'
)
export const getCurrentSuccess = createAction(
    '[Info component] get current successful', 
    props<{payload: {}}>()
)
export const getCurrentFailure = createAction(
    '[Info component] get current failure'
)
export const getInfo = createAction(
    '[Info component] get info'
)
export const getInfoSuccess = createAction(
    '[Info component] get info successful',
    props<{payload: {}}>()
)
export const getInfoFailure = createAction(
    '[Info component] get info failure'
)

//news 
export const getNews = createAction(
    '[News component] get news'
)
export const getNewsSuccess = createAction(
    '[News component] get news successful', 
    props<{payload: {}}>()
)
export const getNewsFailure = createAction(
    '[News component] get news failure'
)