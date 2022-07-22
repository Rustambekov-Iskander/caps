import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean;
    access: string;
    refresh: string;
}

const initialState: AuthState = {
    isAuth: false,
    access: '',
    refresh: '',
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isAuthState(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        addAccessToken(state, action: PayloadAction<string>) {
            state.access = action.payload;
        },
        addRefreshToken(state, action: PayloadAction<string>) {
            state.refresh = action.payload;
        },
    }
})

export default AuthSlice.reducer;
