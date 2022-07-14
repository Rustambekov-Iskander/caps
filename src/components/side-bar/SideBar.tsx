import React, {FC} from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";
import {CAPS_URL} from "../../common/constants";

interface SideBarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar: FC<SideBarProps> = ({isOpen, setIsOpen}) => {
    return (
        <Drawer
            sx={{
                width: '100%',
                flexShrink: 0,
            }}
            variant="persistent"
            anchor="right"
            open={isOpen}
        >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                <IconButton onClick={() => setIsOpen(false)}>
                    <ChevronRightIcon/>
                </IconButton>
            </div>

            <Divider/>
            <List>
                <ListItem >
                    <Link to={`/${CAPS_URL.CATALOG}`}>
                        <ListItemButton>
                            <ListItemIcon> <ViewListIcon/> </ListItemIcon>
                            <Typography> Каталог </Typography>
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideBar;
