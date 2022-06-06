import React from 'react';
import cl from './Header.module.scss';
import logo from '../img/logo.svg';
import basket from '../img/icons/basket.svg';
import search from '../img/icons/search.svg';
import menu from '../img/icons/menu.svg';

const Header = () => {
    return (
        <header className={cl.header}>
            <div className="container">
                <div className={cl.header__inner}>
                    <div className={cl.header__logo}><img src={logo} alt="logo"/></div>
                    <menu className={cl.header__menu}>
                        <li>Каталог</li>
                        <li>Кастомные</li>
                        <li>Бренды</li>
                        <li>О Нас</li>
                    </menu>
                    <div className={cl.header__search}><img src={search} alt=""/><input type="text"/></div>
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
