import React, {FC} from 'react';
import cl from './Slider.module.scss';
import {ICap} from "../../types/caps";

interface SliderItemProps {
    cap: ICap;
}

const SliderItem:FC<SliderItemProps> = ({cap}) => {
    return (
        <div className={cl.slide}>
            <div className={cl.slide__img}><img src={cap.capsimage[0].photo} alt=""/></div>
            <div className={cl.slide__title}>{cap.name}</div>
            <div className={cl.slide__desc}>{cap.brand.name}</div>
            <div className={cl.slide__price}>{cap.price}с</div>
        </div>
    );
};

export default SliderItem;
