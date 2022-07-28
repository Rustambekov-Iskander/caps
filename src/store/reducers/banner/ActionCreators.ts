import {AppDispatch} from "../../store";
import axios from "axios";
import {CAPS_URL} from "../../../common/constants";
import {BannerSlice} from "./BannerSlice";

export const bannerFetchingAction = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(BannerSlice.actions.bannerFetching());
        const resp = await axios.get(`${CAPS_URL.CAPS_API_URL}/${CAPS_URL.BANNERS}/`);
        dispatch(BannerSlice.actions.bannerFetchingSuccess(resp.data.results));
    }catch (e: any){
        dispatch(BannerSlice.actions.bannerFetchingError(e.message));
    }
}
