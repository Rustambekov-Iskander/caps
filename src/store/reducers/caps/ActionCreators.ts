import {AppDispatch} from "../../store";
import {CapsSlice} from "./CapsSlice";
import axios from "axios";
import {CAPS_URL} from "../../../common/constants";
import {SearchSlice} from "./SearchSlice";
import {useState} from "react";

export const fetchCaps = (current: number, limit: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(CapsSlice.actions.capsFetching());
        const [url, setUrl] = useState(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/?limit=${limit}&offset=${current}`);
        const response = await axios.get(
            `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/?limit=${limit}&offset=${current}`
        );

        dispatch(CapsSlice.actions.countPage(response.data.count));
        dispatch(CapsSlice.actions.capsFetchingSuccess(response.data.results));
    } catch (e) {
        // @ts-ignore
        dispatch(CapsSlice.actions.capsFetchingError(e.message))
    }
}


export const fetchCapsSearch = (search: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(SearchSlice.actions.capsFetching());
        const response = await axios.get(
        `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/?search=${search}`
        );
        dispatch(SearchSlice.actions.capsFetchingSuccess(response.data.results));
    } catch (e) {
        // @ts-ignore
        dispatch(SearchSlice.actions.capsFetchingError(e.message))
    }
}