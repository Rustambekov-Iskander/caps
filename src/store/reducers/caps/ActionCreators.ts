import {AppDispatch} from "../../store";
import {CapsSlice} from "./CapsSlice";
import axios from "axios";
import {CAPS_URL} from "../../../common/constants";
import {SearchSlice} from "./SearchSlice";
import {ICap} from "../../../types/caps";
import {useAppSelector} from "../../../hooks/redux";

export const fetchCaps = (current: number, limit: number, sort: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(CapsSlice.actions.capsFetching());
        const response = await axios.get(
            `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/?limit=${limit}&offset=${current}&ordering=${sort}`
        );
        dispatch(CapsSlice.actions.countPage(response.data.count));
        dispatch(CapsSlice.actions.capsFetchingSuccess(response.data.results));
    } catch (e: any) {
        dispatch(CapsSlice.actions.capsFetchingError(e.message))
    }
}

export const fetchCapsSearch = (search: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(SearchSlice.actions.capsFetching());
        const response = await axios.get(
        `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/?search=${search}`
        );
        dispatch(SearchSlice.actions.capsFetchingSuccess(response.data.results));
    } catch (e: any) {
        dispatch(SearchSlice.actions.capsFetchingError(e.message))
    }
}

export const fetchCapsBasket = (capsList:ICap) => async (dispatch: AppDispatch) => {
    try {
        dispatch(SearchSlice.actions.capsFetching());
        const {caps} = useAppSelector(state => state.basketReducer)
        dispatch(SearchSlice.actions.capsFetchingSuccess([...caps, capsList]));
    } catch (e: any) {
        dispatch(SearchSlice.actions.capsFetchingError(e.message))
    }
}

