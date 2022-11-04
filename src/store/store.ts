import { configureStore } from '@reduxjs/toolkit'
import authReducer from './module/authReducer'

/*
 ***  TODO Store
 * Store 하위 모듈위치: store/module/~
 *  Store 명칭은 아래와 같이 사용해 주시길 바랍니다.
 *      define) auth: authReducer
 */
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
