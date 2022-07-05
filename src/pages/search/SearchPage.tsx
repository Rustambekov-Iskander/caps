import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCapsSearch} from "../../store/reducers/caps/ActionCreators";
import CapsList from "../../components/caps-list/CapsList";
import {useParams} from "react-router-dom";
import Loader from "../../components/UI/loader/loader";

const SearchPage = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const {search, caps, error, isLoading} = useAppSelector(state => state.capsSearchReducer)

    useEffect(() => {
        dispatch(fetchCapsSearch(params.search));
    }, [params])

    if (error) {
        return (
            <h1>{error}</h1>
        )
    }else if ( isLoading ) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Loader/>
            </div>
        )
    }else {
        return (
            <div>
                {caps.length === 0 ?<h1>По запросу "{search}" ничего не найдено</h1> :<CapsList caps={caps}/>}
            </div>
        );
    }
};

export default SearchPage;
