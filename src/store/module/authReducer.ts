import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

/*
    Todo 식별하는 문자열 이름 및 타입을 설정한다.
 */
export interface AuthState {
    email: string;
    name: string;
    menuList: [];
    permissionList: [];
    test: number
}

/*
    Todo 식별하는 문자열 초기값을 설정한다.
 */
const initialState: AuthState = {
    email: "",
    name: "",
    menuList: [],
    permissionList: [],
    test: 0
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        increment: (state) => {
            // test
            state.test += 1
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment} = AuthSlice.actions
export default AuthSlice.reducer
