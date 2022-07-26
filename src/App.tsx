import React, {useEffect} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/AppRouter";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import Cookies from "js-cookie";
import {getUserAction, isAuthAction} from "./store/reducers/auth/ActionCreators";
import {fetchCapsBasket} from "./store/reducers/caps/ActionCreators";

function App() {
    const dispatch = useAppDispatch();
    const {isAuth} = useAppSelector(state => state.authReducer);

    useEffect(() => {
        const access = Cookies.get('access');
        const refresh = Cookies.get('refresh');
        if ( access && refresh ) {
            dispatch(isAuthAction(true, access, refresh));
            dispatch(getUserAction(access));
            dispatch(fetchCapsBasket(access));
        }
    }, [isAuth]);

    return (
        <div className="wrapper">
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
}

export default App;
