import React, {FC, useState} from 'react';
import cl from './Counter.module.scss';

interface counterProps {
    countFunc: (count: number) => void;
}

const MyCounter:FC<counterProps> = ({countFunc}) => {
    const [count, setCount] = useState<number>(1);

    const handleCounter = (event: any) => {
        switch (event.target.value) {
            case '+':
                setCount(count < 10 ? count + 1 : count);
                countFunc(count);
                break;
            case '-':
                setCount(count > 1 ? count - 1 : count);
                countFunc(count);
                break;
        }
    }

    return (
        <div className={cl.main}>
            <button className={cl.main__button} onClick={handleCounter} value={'-'}>-</button>
            <span className={cl.main__count}>{count}</span>
            <button className={cl.main__button} onClick={handleCounter} value={'+'}>+</button>
        </div>
    );
};

export default MyCounter;
