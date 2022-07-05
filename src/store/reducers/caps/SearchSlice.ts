import {ICap} from "../../../types/caps";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SearchState {
    caps: ICap[]
    search: string;
    isLoading: boolean;
    error: string;
}

const initialState: SearchState = {
    caps: [],
    search: '',
    isLoading: false,
    error: '',
}

export const SearchSlice = createSlice({
    name: 'search',
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
        searchState(state, action: PayloadAction<string>) {
            state.search = action.payload;
        }
    }
})

export default SearchSlice.reducer