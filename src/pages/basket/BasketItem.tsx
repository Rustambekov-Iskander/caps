import React, {ComponentPropsWithoutRef, FC, useEffect, useState} from 'react';
import cl from './Basket.module.scss';
import MyCounter from "../../components/UI/counter/MyCounter";
import MyToggleButton from "../../components/UI/toggle-button/MyToggleButton";
import {IBasket, ICap} from "../../types/caps";
import {useNavigate} from "react-router-dom";
import {CAPS_URL} from "../../common/constants";
import {Checkbox} from "@mui/material";


interface BasketItemProps {
    cap: ICap;
    handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>, cap: ICap) => void;
}

const BasketItem:FC<BasketItemProps> = ({cap, handleCheckbox}) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [size, setSize] = useState(() => ['']);

    const handleSize = (event: React.MouseEvent<HTMLElement>, newSize: string[]) => {
        setSize(newSize);
    };

    const redirect = () => {
      navigate(`/catalog/${cap.id}`);
    };


    // @ts-ignore
    // @ts-ignore
    return (
        <div className={cl.item}>

            <div onClick={redirect} className={cl.item__img}>
                <img src={cap.capsimage[0].photo} alt=""/>
            </div>

            <MyCounter count={count} setCount={setCount}/>
            <MyToggleButton list={cap.size} arr={size} changeHandler={handleSize}/>

            <div onClick={redirect} className={cl.item__text}>
                <div className={cl.item__title}>{cap.name}</div>
                <div className={cl.item__desc}>{cap.brand.name}</div>
            </div>
            <div className={cl.item__price}>{cap.price}сом</div>

            <Checkbox onChange={(e) => handleCheckbox(e, cap)}/>
        </div>
    );


};

export default BasketItem;
