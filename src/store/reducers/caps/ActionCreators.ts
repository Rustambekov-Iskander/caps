import {AppDispatch} from "../../store";
import {CapsSlice} from "./CapsSlice";
import axios from "axios";
import {CAPS_URL} from "../../../common/constants";
import {SearchSlice} from "./SearchSlice";
import {ICap} from "../../../types/caps";
import {BasketSlice} from "./BasketSlice";
import {getCapsInBasket} from "../../../utils/services";

//catalog
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

//search
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

//basket
export const fetchCapsBasket = (access: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(BasketSlice.actions.basketFetching());
        //get usual caps in basket list
        const response = await axios.get(
            `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.BASKET}/`,
            { headers: {authorization: `Bearer ${access}`} }
        );

        const basketList = response.data.results
        const caps:ICap[] = [];
        await getCapsInBasket(basketList, caps);

        dispatch(BasketSlice.actions.basketCapsAdd(basketList));
        dispatch(BasketSlice.actions.basketFetchingSuccess(caps));
    } catch (e: any) {
        dispatch(SearchSlice.actions.capsFetchingError(e.message))
    }
}


