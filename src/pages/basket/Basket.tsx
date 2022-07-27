import React, {useState} from 'react';
import cl from './Basket.module.scss';
import BasketItem from "./BasketItem";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Button, Card, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {CAPS_URL} from "../../common/constants";
import Loader from "../../components/UI/loader/loader";
import MyButton from "../../components/UI/button/MyButton";
import {IBasket, ICap} from "../../types/caps";
import {postOrder} from "../../utils/services";
import {fetchCapsBasket} from "../../store/reducers/caps/ActionCreators";


const Basket = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {isAuth, access} = useAppSelector(state => state.authReducer);
    const {caps, isLoading, basketCaps} = useAppSelector(state => state.basketReducer);
    const [order, setOrder] = useState<IBasket[]>([]);

    const makeOrder = async () => {
        if (window.confirm('Вы уверены что хотите заказать все выбранные товары в корзине?')){
            await postOrder(order, access);
            dispatch(fetchCapsBasket(access)); // rerender basket-list
            alert('Спасибо\n Ваш заказ принят\n Ожидайте с Вами скоро свяжутся');
            navigate('/')
        }
    }

    const handleCheckbox = (e: any, cap: ICap) => {
        if (e.target.checked) {
            for (const basketCap of basketCaps) {
                if (basketCap.item === cap.id) {
                    setOrder([...order, basketCap]); break;
                }
            }
        }else if (!e.target.checked){
            const newOrder = order.filter(orderCap => orderCap.item != cap.id);
            setOrder([...newOrder]);
        }
    }

    if (isAuth) {
        if (isLoading) {
            return <Loader/>
        }else {
            return (
                <div className={'container'}>
                    <div className={cl.main}>
                        {caps.length
                            ?
                            <div className={cl.main__basketList}>
                                {caps.map((cap, index) => (
                                    <div key={index}>
                                        <BasketItem
                                            cap={cap}
                                            handleCheckbox={handleCheckbox}
                                        />
                                    </div>
                                ))}
                                {order.length
                                    ?<div className={cl.main__button}>
                                        <MyButton onClick={makeOrder} padding={'25px 170px'}>Купить</MyButton>
                                    </div>
                                    : <></>
                                }
                            </div>
                            : <Typography variant={'h3'}>Нет товаров в корзине</Typography>
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
                            to={`/signin/`}
                            color={'secondary'}
                            variant={'contained'}>
                            Войти
                        </Button>
                        <Button
                            component={Link}
                            to={`/signup/`}
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
