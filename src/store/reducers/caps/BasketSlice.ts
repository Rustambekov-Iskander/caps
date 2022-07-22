import {ICap} from "../../../types/caps";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CapsSlice} from "./CapsSlice";

interface BasketState {
    caps: ICap[];
    isLoading: boolean;
    error: string;
}

const initialState: BasketState = {
    caps: [],
    isLoading: false,
    error: '',
}

export const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        //start loading
        basketFetching(state) {
            state.isLoading = true;
        },

        //if successfully
        basketFetchingSuccess(state, action: PayloadAction<ICap[]>) {
            state.isLoading = false;
            state.error = '';
            state.caps = action.payload;
        },

        //if error
        basketFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})
export default BasketSlice.reducer;
