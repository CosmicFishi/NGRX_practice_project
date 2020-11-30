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