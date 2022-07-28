import React, {FC} from 'react';
import MiniCapCard from "./MiniCapCard";
import cl from './MiniCapCards.module.scss';
import {ICap} from "../../types/caps";

interface MiniCapCardsProps {
    flexDirection?: 'column' | 'row';
    caps: ICap[]
}

const MiniCapCards:FC<MiniCapCardsProps> = ({flexDirection = 'row', caps}) => {
    return (
        <div className={cl.cards} style={{ flexDirection: flexDirection }}>
            <MiniCapCard cap={caps[0]}/>
            <MiniCapCard cap={caps[1]}/>
            <MiniCapCard cap={caps[3]}/>
        </div>
    );
};

export default MiniCapCards;
