import React, {ComponentPropsWithoutRef, FC} from 'react';
import cl from './Button.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    padding?: string;
    children: React.ReactNode;
}

const MyButton: FC<ButtonProps> = ({
     children,
     padding = '24px 40px',
     ...props
}) => {

    return (
        <button {...props} className={cl.button} style={{ padding: padding }}>
            {children}
        </button>
    );
};

export default MyButton;
