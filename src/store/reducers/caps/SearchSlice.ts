import {ICap} from "../../../types/caps";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SearchState {
    caps: ICap[]
    search: any[];
    isLoading: boolean;
    error: string;
}

const initialState: SearchState = {
    caps: [],
    search: [],
    isLoading: false,
    error: '',
}

export const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {

        //start loading
        capsFetching(state) {
            state.isLoading = true;
        },

        //if successfully
        capsFetchingSuccess(state, action: PayloadAction<ICap[] | null>) {
            state.isLoading = false;
            state.error = '';
            if ( action.payload ){
                state.caps = action.payload;
            }
        },

        //if error
        capsFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },

        //search
        searchState(state, action: PayloadAction<any[]>) {
            state.search = action.payload;
        }
    }
})

export default SearchSlice.reducer