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
            <Route path={`catalog`} element={<Catalog/>}/>
            <Route path={`search/:search`} element={<SearchPage/>}/>
            <Route path={`catalog/:id`} element={<PostPage/>}/>
            <Route path={`users/basket/`} element={<Basket/>}/>
            <Route path={`signin/`} element={<Login/>}/>
            <Route path={`signup/`} element={<Registration/>}/>
        </Routes>
    );
}

export default AppRouter;
