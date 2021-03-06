import {combineReducers, configureStore} from "@reduxjs/toolkit";
import capsReducer from "./reducers/caps/CapsSlice";
import capsSearchReducer from "./reducers/caps/SearchSlice";
import basketReducer from './reducers/caps/BasketSlice';
import authReducer from './reducers/auth/AuthSlice';
import bannerReducer from './reducers/banner/BannerSlice';

const rootReducer = combineReducers({
    capsReducer,
    capsSearchReducer,
    basketReducer,
    authReducer,
    bannerReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

