import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import Catalog from "../pages/catalog/Catalog";
import {CAPS_URL} from "../common/constants";
import {createBrowserHistory} from "history";
import SearchPage from "../pages/search/SearchPage";
import PostPage from "../pages/post-page/PostPage";
import Login from "../pages/authorization/Login";
import Registration from "../pages/authorization/Registration";
import Basket from "../pages/basket/Basket";

export const history = createBrowserHistory()

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={`${CAPS_URL.CATALOG}`} element={<Catalog/>}/>
            <Route path={`${CAPS_URL.SEARCH}/:search`} element={<SearchPage/>}/>
            <Route path={`${CAPS_URL.CATALOG}/:id`} element={<PostPage/>}/>
            <Route path={`${CAPS_URL.BASKET}/`} element={<Basket/>}/>
            <Route path={`${CAPS_URL.LOGIN}/`} element={<Login/>}/>
            <Route path={`${CAPS_URL.REGISTRATION}/`} element={<Registration/>}/>
        </Routes>
    );
}

export default AppRouter;
