import React, {FC, useEffect, useState} from 'react';
import cl from './Basket.module.scss';
import MyCounter from "../../components/UI/counter/MyCounter";
import MyToggleButton from "../../components/UI/toggle-button/MyToggleButton";
import {IBasket, ICap} from "../../types/caps";


interface BasketItemProps {
    cap: ICap;
}

const BasketItem:FC<BasketItemProps> = ({cap}) => {
    const [count, setCount] = useState(1);
    const [size, setSize] = useState(() => ['']);

    const handleCounter = (count: number) => {
        setCount(count);
    }
    const handleSize = (event: React.MouseEvent<HTMLElement>, newSize: string[]) => {
        setSize(newSize);
    };


    return (
        <div className={cl.item}>

            <div className={cl.item__img}>
                <img src={cap.capsimage[0].photo} alt=""/>
            </div>

            <MyCounter countFunc={handleCounter}/>
            <MyToggleButton list={cap.size} arr={size} changeHandler={handleSize}/>

            <div className={cl.item__text}>
                <div className={cl.item__title}>{cap.name}</div>
                <div className={cl.item__desc}>{cap.brand.name}</div>
            </div>
            <div className={cl.item__price}>3200сом</div>
        </div>
    );


};

export default BasketItem;
