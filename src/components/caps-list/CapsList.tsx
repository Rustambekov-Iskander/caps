import React, {FC} from 'react';
import CapCard from "../cap-card/CapCard";
import cl from './CapsList.module.scss'
import {ICaps} from "../../types/caps";

const CapsList: FC<ICaps> = ({caps}) => {
    return (
        <div className={cl.cards}>
            {caps.map(cap => (
                <CapCard key={cap.id} cap={cap}/>
            ))}
        </div>
    );
};

export default CapsList;
