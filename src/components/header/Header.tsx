import React, {FormEvent, useEffect, useState} from 'react';
import cl from './Header.module.scss';
import logo from '../img/logo.svg';
import basket from '../img/icons/basket.svg';
import search from '../img/icons/search.svg';
import menu from '../img/icons/menu.svg';
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {SearchSlice} from "../../store/reducers/caps/SearchSlice";
import axios from "axios";
import {CAPS_URL} from "../../common/constants";
import {ICap} from "../../types/caps";
import {Autocomplete, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    let navigate = useNavigate()
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');
    const [names, setNames] = useState<ICap[]>([]);

    const submitHandler = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        dispatch(SearchSlice.actions.searchState(value))
        setValue('');
        navigate('/search')
    }

    useEffect(() => {
        if ( value ) {
            ( async () => {
                const response = await axios.get(
                    `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.CAPS}/?search=${value}&limit=5`
                )
                setNames(response.data.results);
            })()
        }
    }, [value])

    return (
        <header className={cl.header}>
            <div className="container">
                <div className={cl.header__inner}>
                    <Link to={'/'} className={cl.header__logo}><img src={logo} alt="logo"/></Link>
                    <menu className={cl.header__menu}>
                        <Link to={'/catalog'}>Каталог</Link>
                        <Link to={'/'}>Кастомные</Link>
                        <Link to={'/'}>Бренды</Link>
                        <Link to={'/'}>О Нас</Link>
                    </menu>


                    <form onSubmit={submitHandler}>
                        <Autocomplete
                            className={cl.header__search}
                            options={names.map((name) => name.name)}
                            renderInput={(params) =>
                                <TextField
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    {...params}
                                />

                        }
                        />
                    </form>

                    <div className={cl.header__icons}>
                        <div className={cl.header__basket}><img src={basket} alt="basket"/></div>
                        <div className={cl.header__burgerMenu}><img src={menu} alt="menu"/></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
