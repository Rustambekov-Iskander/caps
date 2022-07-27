import {AppDispatch} from "../../store";
import {AuthSlice} from "./AuthSlice";
import axios from "axios";
import {CAPS_URL} from "../../../common/constants";
import Cookies from "js-cookie";

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

export const getUserAction = (access: string) => async (dispatch: AppDispatch) => {
    dispatch(AuthSlice.actions.userFetching());
    const response = await axios.get(
        `http://164.92.190.147:8003/api/users/profile/`,
        { headers: {authorization: `Bearer ${access}`} }
    );
    dispatch(AuthSlice.actions.userFetchingSuccess(response.data));
}