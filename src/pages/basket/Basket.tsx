import React, {useEffect, useState} from 'react';
import cl from './Basket.module.scss';
import BasketItem from "./BasketItem";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Button, Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {CAPS_URL} from "../../common/constants";
import {fetchCapsBasket} from "../../store/reducers/caps/ActionCreators";
import Loader from "../../components/UI/loader/loader";
import Cookies from "js-cookie";

const Basket = () => {
    const dispatch = useAppDispatch();
    const {isAuth} = useAppSelector(state => state.authReducer);
    const {caps, isLoading} = useAppSelector(state => state.basketReducer);
    const access = Cookies.get('access');


    useEffect( () => {
        if (access) {
            (async () => {
                dispatch(fetchCapsBasket(access))
            })();
        }
    }, []);

    if (isAuth) {
        if (isLoading) {
            return <Loader/>
        }else {
            return (
                <div className={'container'}>
                    <div className={cl.main}>
                        {caps.length
                            ? caps.map((cap, index) => (
                                <div key={index}>
                                    <BasketItem cap={cap}/>
                                </div>
                            ))
                            : <Typography>Нет товаров в корзине</Typography>
                        }
                    </div>
                </div>
            )
        }
    } else if (!isAuth) {
        return (
            <div className={'container'}>
                <Card className={cl.card}>
                    <Typography className={cl.card__title} variant={'h4'}>
                        Не авторизованные пользователи не могут добавлять товар в корзину
                    </Typography>
                    <div className={cl.card__buttons}>
                        <Button
                            component={Link}
                            to={`/${CAPS_URL.LOGIN}/`}
                            color={'secondary'}
                            variant={'contained'}>
                            Войти
                        </Button>
                        <Button
                            component={Link}
                            to={`/${CAPS_URL.REGISTRATION}/`}
                            color={'secondary'}
                            variant={'contained'}>
                            Зарегистрироваться
                        </Button>
                    </div>
                </Card>
            </div>
        );
    } else {
        return <Typography variant={'h4'}>Произошла какая-та ошибка!</Typography>
    }
};

export default Basket;
