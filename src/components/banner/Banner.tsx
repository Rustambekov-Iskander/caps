import React, {FC} from 'react';
import cl from './Banner.module.scss';
import MyButton from "../UI/button/MyButton";
import {Link} from "react-router-dom";
import {CAPS_URL} from "../../common/constants";
import MiniCapCards from "../mini-cap-cards/MiniCapCards";
import {ICap} from "../../types/caps";

interface BannerProps {
    caps?: ICap[] | false;
    buttonColor?: string;
    color?: string;
    bannerImg: string;
}

const Banner:FC<BannerProps> = ({
    caps = false,
    buttonColor = '#FDDB16',
    color= 'black',
    bannerImg
}) => {

    if (caps) {
        return (
            <div className={'container'} style={{
                background: `url(${bannerImg}) right/cover no-repeat`,
                height: '617.9px',
                marginBottom: '150px'
            }}>
                <div className={cl.mainCaps}>
                    <div className={cl.mainCaps__caps}>
                        <MiniCapCards caps={caps} flexDirection={"column"}/>
                    </div>
                    <div className={cl.mainCaps__text}>
                        <div className={cl.mainCaps__title}>
                            SUPREME & NEW ERA
                        </div>
                        <div className={cl.mainCaps__desc}>COLLABARATION</div>
                        <Link to={`/${CAPS_URL.CATALOG}`} className={cl.main__button}>
                            <MyButton color={color} backgroundColor={buttonColor} padding={'19px 35px'}>Открыть каталог</MyButton>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={'container'} style={{ background: `url(${bannerImg}) right/cover no-repeat`, height: '596px'}}>
            <div className={cl.main}>

                <div className={cl.main__text}>
                    <div className={cl.main__title}>NEW ERA</div>
                    <div className={cl.main__desc}>
                        Новая коллекция 2021 уже доступны на заказ
                        яркие цвета, винтажный принт 70х, тематические
                        группы и отличное качество
                    </div>
                    <Link to={`/${CAPS_URL.CATALOG}`} className={cl.main__button}>
                        <MyButton color={color} backgroundColor={buttonColor} padding={'19px 35px'}>Открыть каталог</MyButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
