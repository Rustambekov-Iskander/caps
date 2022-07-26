import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../types/user";

interface AuthState {
    isAuth: boolean;
    user: IUser | null;
    isLoading: boolean;
    access: string;
    refresh: string;
}

const initialState: AuthState = {
    isAuth: false,
    user: null,
    isLoading: false,
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
        userFetching(state) {
            state.isLoading = true;
        },
        userFetchingSuccess(state, action: PayloadAction<IUser>){
            state.isLoading = false;
            state.user = action.payload;
        }
    }
})

export default AuthSlice.reducer;
