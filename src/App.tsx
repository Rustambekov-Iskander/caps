import React, {useEffect} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/AppRouter";
import {useAppDispatch} from "./hooks/redux";
import Cookies from "js-cookie";
import {isAuthAction} from "./store/reducers/auth/ActionCreators";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const access = Cookies.get('access');
        const refresh = Cookies.get('refresh');
        if ( access && refresh ) {
            dispatch(isAuthAction(true, access, refresh))
        }
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
}

export default App;
