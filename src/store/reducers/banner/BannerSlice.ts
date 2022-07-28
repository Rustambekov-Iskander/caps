import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBanner} from "../../../types/banner";

interface BannerState {
    banners: IBanner[];
    isLoading: boolean;
    error: string;
}

const initialState: BannerState = {
    banners: [],
    isLoading: false,
    error: '',
}

export const BannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        //start loading
        bannerFetching(state) {
            state.isLoading = true;
        },

        //if successfully
        bannerFetchingSuccess(state, action: PayloadAction<IBanner[]>) {
            state.isLoading = false;
            state.error = '';
            state.banners = action.payload;
        },

        //if error
        bannerFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})
export default BannerSlice.reducer;
