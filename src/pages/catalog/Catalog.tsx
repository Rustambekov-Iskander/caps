import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCaps} from "../../store/reducers/caps/ActionCreators";
import CapsList from "../../components/caps-list/CapsList";
import {FormControl, MenuItem, Pagination, Select} from "@mui/material";
import cl from './Catalog.module.scss';
import Loader from "../../components/UI/loader/loader";

const Catalog = () => {
    //hooks
    const dispatch = useAppDispatch();

    //caps
    const {caps, isLoading, error, limit, count} = useAppSelector(state => state.capsReducer)

    //pagination and sort
    const [sort, setSort] = useState('created_data');
    const [currentPage, setCurrentPage] = useState(1);
    const pagesCount = Math.ceil(count / limit);

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value)
    }

    useEffect(() => {
        switch (currentPage) {
            case 1:
                dispatch(fetchCaps(0, limit, sort))
                break
            case 2:
                dispatch(fetchCaps(limit, limit, sort))
                break
            default:
                dispatch(fetchCaps(currentPage * limit, limit, sort))
        }
        window.scroll(0, 1)
    }, [currentPage, sort])

    if (error) {
        return (
            <h1>
                {error}
            </h1>
        );
    }

    return (
        <div className={'container'}>
            {
                isLoading
                ?<Loader/>
                :<>
                    <div className={cl.sort}>
                        <FormControl sx={{ width: '270px', m: '20px 0'}}>
                            <Select
                                value={sort}
                                onChange={(e) => {
                                    setSort(e.target.value);
                                    setCurrentPage(1)}}
                            >
                                <MenuItem value={'created_data'}>Популярные</MenuItem>
                                <MenuItem value={'price'}>Сначала дешевые</MenuItem>
                                <MenuItem value={'-price'}>Сначала дорогие</MenuItem>
                                <MenuItem value={'-created_data'}>Новинки</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                        <CapsList caps={caps}/>
                        <Pagination
                            className={cl.pagination}
                            count={pagesCount}
                            page={currentPage}
                            onChange={handleChange}/>
                    </>
            }
        </div>
    )
};

export default Catalog;
