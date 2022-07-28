import React, {FC, useState} from 'react';
import cl from './MiniBanner.module.scss';
import {IBanner} from "../../types/banner";

interface MiniBannerProps {
    banner: IBanner
}

const MiniBanner:FC<MiniBannerProps> = ({banner}) => {

    return (
        <div className={cl.main} style={{ background: `url(${banner.baner}) 0 0/cover no-repeat` }}>
            <div className={cl.main__text}>
                <div className={cl.main__title}>{banner.baner_title}</div>
                <div className={cl.main__desc}>Создай свой стиль</div>
            </div>
        </div>
    );
};

export default MiniBanner;
