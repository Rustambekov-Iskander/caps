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
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";
import {CAPS_URL} from "../../common/constants";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {logOut} from "../../store/reducers/auth/ActionCreators";
import Cookies from "js-cookie";


interface SideBarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar: FC<SideBarProps> = ({isOpen, setIsOpen}) => {
    const dispatch = useAppDispatch();
    const { isAuth } = useAppSelector(state => state.authReducer);
    const logout = () => {
        setIsOpen(false);
        Cookies.remove('access');
        Cookies.remove('refresh');
        dispatch(logOut());
    }
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
                    <Link to={`/catalog`} onClick={() => setIsOpen(false)}>
                        <ListItemButton>
                            <ListItemIcon> <ViewListIcon/> </ListItemIcon>
                            <Typography> Каталог </Typography>
                        </ListItemButton>
                    </Link>
                </ListItem>
                {
                    !isAuth
                        ?
                        <ListItem>
                            <Link to={`/signin/`} onClick={() => setIsOpen(false)}>
                                <ListItemButton>
                                    <ListItemIcon> <LoginIcon/> </ListItemIcon>
                                    <Typography>Войти</Typography>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        :
                        <ListItem>
                            <Link to={`/`} onClick={logout}>
                                <ListItemButton>
                                    <ListItemIcon> <LogoutIcon/> </ListItemIcon>
                                    <Typography> Выйти </Typography>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                }
            </List>
        </Drawer>
    );
};

export default SideBar;
