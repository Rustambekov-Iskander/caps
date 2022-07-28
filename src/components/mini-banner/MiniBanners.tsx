import React, {FC} from 'react';
import MiniBanner from "./MiniBanner";
import cl from './MiniBanner.module.scss';
import bannerImg from '../img/mini-banner.png'
import bannerImg2 from '../img/mini-banner-2.png'
import {IBanner} from "../../types/banner";


const MiniBanners = () => {
    const banners: IBanner[] = [
        {id: 1, baner: bannerImg, baner_title: 'Кастомные'},
        {id: 2, baner: bannerImg2, baner_title: 'Эксклюзив'}
    ];

    return (
        <div className={cl.banners}>
            {banners.map( (banner) => (
                <MiniBanner key={banner.id} banner={banner} />
            ))}
        </div>
    );
};

export default MiniBanners;
