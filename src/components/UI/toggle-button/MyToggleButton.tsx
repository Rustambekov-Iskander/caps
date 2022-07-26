import React, {FC, useRef} from 'react';
import cl from './ToggleButton.module.scss';
import {ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";

interface ToggleButtonProps {
    list: any[] | undefined;
    arr: string[];
    changeHandler: (e: React.MouseEvent<HTMLElement>, newFormats: never[]) => void;
}

const MyToggleButton:FC <ToggleButtonProps> = ({ list, arr, changeHandler }) => {
    if (list != undefined) {
        return (
            <ToggleButtonGroup className={cl.toggleButtonGroup} value={arr} onChange={changeHandler}>
                {list.map((item) => (
                    <ToggleButton
                        sx={{width: '70px', height: '48px'}}
                        key={item.value}
                        value={item.value}
                        aria-label={item.value}
                    >
                        {item.value}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        )
    }else {
        return <Typography variant={'h3'}>Нет данных</Typography>
    }
};

export default MyToggleButton;
