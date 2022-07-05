import React, {ComponentPropsWithoutRef, FC} from 'react';
import cl from './Loader.module.scss'

const Loader:FC<ComponentPropsWithoutRef<"div">> = (props) => {
    return (
        <div {...props} className={cl.ldsHourglass}>
        </div>
    );
}

export default Loader;
