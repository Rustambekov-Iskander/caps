import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICap} from "../../../types/caps";

interface CapsState {
    caps: ICap[];
    isLoading: boolean;
    error: string;
    count: number;
    limit: number;
    search: string
}

const initialState: CapsState = {
    caps: [],
    isLoading: false,
    error: '',
    count: 0,
    limit: 16,
    search: '',
}

export const CapsSlice = createSlice({
    name: 'caps',
    initialState,
    reducers: {
        capsFetching(state) {
            state.isLoading = true;
        },
        capsFetchingSuccess(state, action: PayloadAction<ICap[]>) {
            state.isLoading = false;
            state.error = '';
            state.caps = action.payload;
        },
        capsFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },
        countPage(state, action) {
            state.count = action.payload
        },
    }
})

export default CapsSlice.reducer;