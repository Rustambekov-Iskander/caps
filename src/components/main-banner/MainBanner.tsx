import React, {useEffect} from 'react';
import cl from './MainBanner.module.scss';
import bannerImg from '../img/main-banner.png';
import MyButton from "../UI/button/MyButton";
import axios from "axios";

const MainBanner = () => {


    return (
        <div className={'container'}>
            <div className={cl.main}>
                <div className={cl.main__img}>
                    <img src={bannerImg} alt=""/>
                </div>
                <div className={cl.main__text}>
                    <div className={cl.main__title}>NEW ERA</div>
                    <div className={cl.main__desc}>
                        Новая коллекция 2021 уже доступны на заказ
                        яркие цвета, винтажный принт 70х, тематические
                        группы и отличное качество
                    </div>

                    <div className={cl.main__button}>
                        <MyButton padding={'19px 35px'}>Открыть каталог</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;
