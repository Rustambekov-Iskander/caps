import React, {FC} from 'react';
import cl from './Counter.module.scss';

interface counterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const MyCounter:FC<counterProps> = ({ count, setCount}) => {

    const handleCounter = (event: any) => {
        switch (event.target.value) {
            case '+':
                setCount(count < 10 ? count + 1 : count);
                break;
            case '-':
                setCount(count > 1 ? count - 1 : count);
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
