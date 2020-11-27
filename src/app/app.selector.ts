import { createSelector } from '@ngrx/store'

export interface userState { 
    username: string
}

export const selectUser = (u: userState) => u.username;

// export const selectUserFromStore = createSelector(
//     selectUser,
//     (n: userState) => n.username
// )