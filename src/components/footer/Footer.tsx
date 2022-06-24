import React from 'react';
import cl from './Footer.module.scss';
import logo from '../img/logo.svg'
import linkedIn from '../img/icons/in.svg';
import f from '../img/icons/f.svg';
import twitter from '../img/icons/twitter.svg';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className="container">
                <div className={cl.footer__inner}>
                    <div className={cl.footer__row}>
                        <div className={cl.footer__logo}>
                            <img src={logo} alt=""/>
                            <div className={cl.footer__logoRow}>
                                <div className={cl.footer__name}>CUSTOM CAPS</div>
                                <div className={cl.footer__desc}>Магазин кепок</div>
                            </div>
                        </div>
                        <div className={cl.footer__social}>
                            <div className={cl.footer__socialItem}><img src={linkedIn} alt="linkedIn"/></div>
                            <div className={cl.footer__socialItem}><img src={f} alt="facebook"/></div>
                            <div className={cl.footer__socialItem}><img src={twitter} alt="twitter"/></div>
                        </div>
                    </div>
                    <div className={cl.footer__rights}>© Copyright 2019 - Lift Media</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
