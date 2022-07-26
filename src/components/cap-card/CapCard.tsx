import React, {FC} from 'react';
import cl from './CapCard.module.scss';
import {ICap} from "../../types/caps";
import {Link} from "react-router-dom";
import {CAPS_URL} from "../../common/constants";

interface capCardProps {
    cap: ICap;
}

const CapCard: FC<capCardProps> = ({cap}) => {
    const name = cap.name.length > 10 ? cap.name.slice(0, 10) + '...' : cap.name;

    return (
        <Link to={`/${CAPS_URL.CATALOG}/${cap.id}`} className={cl.card}>
            <div className={cl.card__img}>
                {cap.capsimage ?<img src={cap.capsimage[0].photo} alt="cap"/> :'Нет фото'}
            </div>
            <div className={cl.card__row}>
                <div className={cl.card__text}>
                    <div className={cl.card__title}>{name}</div>
                    <div className={cl.card__desc}>{cap.brand.name}</div>
                </div>
                <div className={cl.card__price}>{cap.price}c</div>
            </div>
        </Link>
    );
};

export default CapCard;
