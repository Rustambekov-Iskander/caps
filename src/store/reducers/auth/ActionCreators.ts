import {AppDispatch} from "../../store";
import {AuthSlice} from "./AuthSlice";

export const isAuthAction = (isAuth: boolean, access: string, refresh: string) => (dispatch: AppDispatch) => {
    dispatch(AuthSlice.actions.isAuthState(isAuth));
    dispatch(AuthSlice.actions.addAccessToken(access));
    dispatch(AuthSlice.actions.addRefreshToken(refresh));
}

export const logOut = () => (dispatch: AppDispatch) => {
    dispatch(AuthSlice.actions.isAuthState(false));
    dispatch(AuthSlice.actions.addAccessToken(''));
    dispatch(AuthSlice.actions.addRefreshToken(''));
}