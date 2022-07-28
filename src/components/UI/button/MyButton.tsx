import React, {FC} from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
    padding?: string;
    color?: string;
    backgroundColor?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const MyButton: FC<ButtonProps> = ({
     children,
     padding = '24px 40px',
     color= 'black',
     backgroundColor= '#FDDB16',
     onClick
}) => {

    return (
        <Button
            onClick={onClick}
            variant="contained"
            sx={{
                padding: padding,
                borderRadius: '20px',
                color: color,
                backgroundColor: backgroundColor
            }}
        >
            {children}
        </Button>
    );
};

export default MyButton;
