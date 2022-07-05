import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import Catalog from "../pages/catalog/Catalog";
import {CAPS_URL} from "../common/constants";
import {createBrowserHistory} from "history";
import SearchPage from "../pages/search/SearchPage";
import PostPage from "../pages/post-page/PostPage";

export const history = createBrowserHistory()

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={`${CAPS_URL.CATALOG}`} element={<Catalog/>}/>
            <Route path={`${CAPS_URL.SEARCH}/:search`} element={<SearchPage/>}/>
            <Route path={`${CAPS_URL.CATALOG}/:id`} element={<PostPage/>}/>
        </Routes>
    );
}

export default AppRouter;
