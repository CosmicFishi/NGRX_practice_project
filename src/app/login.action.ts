import { createAction, props } from '@ngrx/store'

//tạo action login 
export const login = createAction(
    '[Login Component] setLoginName', 
    props<{ username: string}>()
)
export const logOut = createAction( 
    '[Login Component] setLogoutName'
)

//score
export const increaseScore = createAction( 
    '[Score Component] increaseScore'
)
export const decreaseScore = createAction( 
    '[Score Component] decreaseScore'
)
export const setScore = createAction( 
    '[Score Component] setScore'
)