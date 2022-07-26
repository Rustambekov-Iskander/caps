import React, {useEffect, useState} from 'react';
import Slider from "../../components/UI/slider/Slider";
import {ICap} from "../../types/caps";
import {useNavigate, useParams} from "react-router-dom";
import {deleteBasket, getCapById, getSliderPost, postBasket} from "../../utils/services";
import Loader from "../../components/UI/loader/loader";
import cl from './PostPage.module.scss';
import {Typography} from "@mui/material";
import MyToggleButton from "../../components/UI/toggle-button/MyToggleButton";
import cap1 from '../../components/img/default-cap1.png';
import cap2 from '../../components/img/default-cap2.png';
import cap3 from '../../components/img/default-cap3.png';
import MyButton from "../../components/UI/button/MyButton";
import MyCounter from "../../components/UI/counter/MyCounter";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCapsBasket} from "../../store/reducers/caps/ActionCreators";
import {CAPS_URL} from "../../common/constants";

const PostPage = () => {
    //hooks
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    //caps states
    const [cap, setCap] = useState<ICap>();
    const [capsSlide, setCapsSlide] = useState<ICap[]>([]);
    const {basketCaps, isLoading} = useAppSelector(state => state.basketReducer); //caps in basket

    //authorization
    const {isAuth, access, user} = useAppSelector(state => state.authReducer);

    //page state
    const [pageIsLoading, setPageIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>('');

    //cap data
    const [count, setCount] = useState(1);
    const [size, setSize] = useState(() => ['']);
    let resemblance:number | null | undefined = null; //is there a cap in the basket

    //functions to change the cap
    const handleSize = (event: React.MouseEvent<HTMLElement>, newSize: string[]) => {
        setSize(newSize);
    };

    // checking if the item is in the basket
    const resemblanceCheck = () => {
        for (const basketCap of basketCaps) {
            if (basketCap.item === cap?.id) {
                resemblance = basketCap.id; break;
            }
        }
    }

    //adding caps to basket
    const handleBasketButton = async () => {
        if (isAuth && user && cap) {
            resemblanceCheck(); // checking

            if (resemblance) {
                if (window.confirm('товар уже добавлен в корзину, Хотите удалить кепку из корзины?')) {
                    setPageIsLoading(true)
                    await deleteBasket(resemblance, access);
                    dispatch(fetchCapsBasket(access)); // rerender basket-list
                    setPageIsLoading(false);
                    alert('Успешно удалено из корзины!');
                }
            }else if (!resemblance) {
                if (window.confirm('Вы действительно хотите добавить этот товар себе в корзину?')) {
                    setPageIsLoading(true)
                    const basketItem = {item: cap.id, user: user.id, quantity: count};
                    await postBasket(basketItem);
                    dispatch(fetchCapsBasket(access)); // rerender basket-list
                    setPageIsLoading(false);
                    alert('Успешно добавлено в корзину!');
                }
            }

        }else if (!isAuth) {
            navigate(`/${CAPS_URL.BASKET}`);
        }
    }


    const postPageFetching = async () => {
        setPageIsLoading(true);
        try {
            setCap(await getCapById(params.id));
            setCapsSlide(await getSliderPost());
            setSize([]);
            setCount(1);
        }catch (e: any) {
            setIsError(e.message);
        }
        setPageIsLoading(false);
    };

    useEffect(() => {
        (async () => {
            await postPageFetching();
        })();
    }, [params.id]);

    if (pageIsLoading || isLoading) {
        return (
            <div className={'container'}>
                <Loader/>
            </div>
        )
    } else if (cap) {
        return (
            <div className={'container'}>
                <div className={cl.main}>
                    <div className={cl.main__images}>
                        <div className={cl.main__image}><img src={cap?.capsimage[0].photo} alt=""/></div>
                        <div className={cl.main__smallImages}>
                            <div className={cl.main__imageSmall}><img src={cap1} alt=""/></div>
                            <div className={cl.main__imageSmall}><img src={cap2} alt=""/></div>
                            <div className={cl.main__imageSmall}><img src={cap3} alt=""/></div>
                        </div>
                    </div>

                    <div className={cl.main__column}>
                        <div>
                            <div className={cl.main__text}>
                                <div className={cl.main__title}>{cap.name}</div>
                                <div className={cl.main__brand}>{cap.brand.name}</div>
                            </div>

                            <div className={cl.main__counterDiv}>
                                <MyToggleButton list={cap.size} arr={size} changeHandler={handleSize}/>
                                <MyCounter count={count} setCount={setCount}/>
                            </div>
                        </div>

                        <div className={cl.main__priceButtonDiv}>
                            <div className={cl.main__price}>{cap.price}сом</div>
                            <MyButton onClick={handleBasketButton}>добавить в корзину</MyButton>
                        </div>
                    </div>
                </div>
                <Typography sx={{textAlign: 'center', margin: '20px 0px', fontWeight: 700}} variant={'h4'}>
                    Похожие товары
                </Typography>
                <Slider caps={capsSlide}/>
            </div>
        );
    } else {
        return <Typography variant={'h2'}>{isError}</Typography>
    }
};

export default PostPage;
