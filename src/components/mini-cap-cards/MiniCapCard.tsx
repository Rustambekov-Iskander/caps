import React, {FC} from 'react';
import cl from './MiniCapCards.module.scss';
import {ICap} from "../../types/caps";
import {Link} from "react-router-dom";
import {CAPS_URL} from "../../common/constants";

interface MiniCapCardProps {
    cap: ICap;
}

const MiniCapCard:FC<MiniCapCardProps> = ({cap}) => {
    return (
        <Link to={`${CAPS_URL.CATALOG}/${cap.id}`} className={cl.card}>
            <div className={cl.card__img}><img src={cap?.capsimage[0].photo} alt="cap"/></div>
            <div className={cl.card__text}>
                <div className={cl.card__date}>{cap.created_data.slice(0, 4)}</div>
                <div className={cl.card__name}>{cap.name}</div>
                <div className={cl.card__desc}>{cap.brand.name}</div>
                <div className={cl.card__price}>
                    {cap.new_price
                        ?<>
                            <span className={cl.card__oldPrice}><span className={cl.card__line}></span>{cap.price}</span>
                            <span className={cl.card__newPrice}>{cap.new_price}</span>
                        </>
                        :<span className={cl.card__newPrice}>{cap.price}</span>
                    }
                </div>
            </div>
        </Link>
    );
};

export default MiniCapCard;
