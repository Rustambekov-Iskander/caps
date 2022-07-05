import {combineReducers, configureStore} from "@reduxjs/toolkit";
import capsReducer from "./reducers/caps/CapsSlice";
import capsSearchReducer from "./reducers/caps/SearchSlice";
import basketReducer from './reducers/caps/BasketSlice';

const rootReducer = combineReducers({
    capsReducer,
    capsSearchReducer,
    basketReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

