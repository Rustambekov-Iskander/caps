import React, {ComponentPropsWithoutRef, FC} from 'react';
import cl from './Loader.module.scss'

const Loader:FC<ComponentPropsWithoutRef<"div">> = (props) => {
    return (
        <div className={'flex'}>
            <div {...props} className={cl.ldsHourglass}>
            </div>
        </div>
    );
}

export default Loader;
