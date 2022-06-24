import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCapsSearch} from "../../store/reducers/caps/ActionCreators";
import CapsList from "../../components/caps-list/CapsList";

const SearchPage = () => {
    const dispatch = useAppDispatch();
    const {search, caps, error} = useAppSelector(state => state.capsSearchReducer)

    useEffect(() => {
        dispatch(fetchCapsSearch(search))
    }, [search])

    return (
        <div>
            <CapsList caps={caps}/>
        </div>
    );
};

export default SearchPage;
