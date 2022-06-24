import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCaps} from "../../store/reducers/caps/ActionCreators";
import CapsList from "../../components/caps-list/CapsList";
import {FormControl, InputLabel, MenuItem, Pagination, Select} from "@mui/material";
import cl from './Catalog.module.scss';
import Loader from "../../components/UI/loader/loader";

const Catalog = () => {
    const dispatch = useAppDispatch();
    const {caps, isLoading, error, limit, count} = useAppSelector(state => state.capsReducer)
    const [sort, setSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const pagesCount = Math.ceil(count / limit);

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value)
    }
    useEffect(() => {
        switch (currentPage) {
            case 1:
                dispatch(fetchCaps(0, limit))
                break
            case 2:
                dispatch(fetchCaps(limit, limit))
                break
            default:
                dispatch(fetchCaps(currentPage * limit, limit))
        }
        window.scroll(0, 1)
    }, [currentPage])

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
                ? <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Loader/>
                    </div>
                : <>
                        <FormControl sx={{ width: '270px' }}>
                            <InputLabel>Сортировать по: </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={10}>Популярные</MenuItem>
                                <MenuItem value={20}>Сначала дешевые</MenuItem>
                                <MenuItem value={30}>Сначала дорогие</MenuItem>
                                <MenuItem value={30}>Дорогие</MenuItem>
                            </Select>
                        </FormControl>
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
