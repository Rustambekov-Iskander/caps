import React, {FormEvent, useEffect, useState} from 'react';
import cl from './Header.module.scss';
import logo from '../img/logo.svg';
import basket from '../img/icons/basket.svg';
import menu from '../img/icons/menu.svg';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {CAPS_URL} from "../../common/constants";
import {ICap} from "../../types/caps";
import {Autocomplete, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {SearchSlice} from "../../store/reducers/caps/SearchSlice";
import SideBar from "../side-bar/SideBar";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {search} = useAppSelector(state => state.capsSearchReducer);
    const [value, setValue] = useState<string | null>(null);
    const [names, setNames] = useState<ICap[]>([]);
    const [sideBar, setSideBar] = useState<boolean>(false);

    const submitHandler = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        if (value) {
            dispatch(SearchSlice.actions.searchState([...search, value]));
            setValue('');
            navigate(`/${CAPS_URL.SEARCH}/${value}`)
        }
    }

    useEffect(() => {
        if (value) {
            (async () => {
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
                        <Link to={`/${CAPS_URL.CATALOG}`}>Каталог</Link>
                        <Link to={'/'}>Кастомные</Link>
                        <Link to={'/'}>Бренды</Link>
                        <Link to={'/'}>О Нас</Link>
                    </menu>


                    <form onSubmit={submitHandler}>
                        <Autocomplete
                            className={cl.header__search}
                            options={names.map((name) => name.name)}
                            freeSolo
                            value={value}
                            onChange={(e: any, newValue: string | null) => setValue(newValue)}
                            renderInput={(params) =>
                                <TextField
                                    label={'Поиск'}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    {...params}/>}
                        />
                    </form>

                    <div className={cl.header__icons}>
                        <div className={cl.header__basket}><img src={basket} alt="basket"/></div>
                        <div className={cl.header__burgerMenu} onClick={() => setSideBar(!sideBar)}>
                            <img src={menu} alt="menu"/>
                        </div>
                    </div>
                </div>
            </div>
            <SideBar isOpen={sideBar} setIsOpen={setSideBar}/>
        </header>
    );
};

export default Header;
