import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICap} from "../../../types/caps";

interface CapsState {
    caps: ICap[];
    isLoading: boolean;
    error: string;
    count: number;
    limit: number;
}

const initialState: CapsState = {
    caps: [],
    isLoading: false,
    error: '',
    count: 0,
    limit: 8,
}

export const CapsSlice = createSlice({
    name: 'caps',
    initialState,
    reducers: {
        //start loading
        capsFetching(state) {
            state.isLoading = true;
        },

        //if successfully
        capsFetchingSuccess(state, action: PayloadAction<ICap[]>) {
            state.isLoading = false;
            state.error = '';
            state.caps = action.payload;
        },

        //if error
        capsFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },

        //change page in catalog
        countPage(state, action) {
            state.count = action.payload
        },
    }
})

export default CapsSlice.reducer;