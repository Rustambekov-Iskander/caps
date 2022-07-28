import React, {useEffect, useState} from 'react';
import cl from './CapsInNumber.module.scss';
import axios from "axios";
import {CAPS_URL} from "../../common/constants";
import {getCapsInNumber} from "../../utils/services";
import {IDigits} from "../../types/caps";

const CapsInNumber = () => {
    const [digit, setDigit] = useState<IDigits>();

    useEffect(() => {
        (async () => {
            setDigit(await getCapsInNumber());
        })()
    }, []);

    return (
        <div className={'container'}>
            <div className={cl.main}>
                <div className={cl.main__title}>CUSTOM CUPS в цифрах</div>
                <div className={cl.main__text}>
                    <div className={cl.main__sallied}><span className={'yellow'}>{digit?.saled}</span>проданных кепок</div>
                    <div className={cl.main__years}><span className={'yellow'}>{digit?.year_in_market}</span>лет на рынке</div>
                    <div className={cl.main__clients}><span className={'yellow'}>{digit?.clients}</span>довольных клиентов</div>
                </div>
            </div>
        </div>
    );
};

export default CapsInNumber;
