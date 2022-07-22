import React, {useEffect, useState} from 'react';
import Slider from "../../components/UI/slider/Slider";
import {ICap} from "../../types/caps";
import {useParams} from "react-router-dom";
import {getCapById, getSliderPost} from "../../utils/services";
import Loader from "../../components/UI/loader/loader";
import cl from './PostPage.module.scss';
import {Typography} from "@mui/material";
import MyToggleButton from "../../components/UI/toggle-button/MyToggleButton";
import cap1 from '../../components/img/default-cap1.png';
import cap2 from '../../components/img/default-cap2.png';
import cap3 from '../../components/img/default-cap3.png';
import MyButton from "../../components/UI/button/MyButton";
import MyCounter from "../../components/UI/counter/MyCounter";

const PostPage = () => {
    const params = useParams();

    const [cap, setCap] = useState<ICap>();
    const [caps, setCaps] = useState<ICap[]>([]); //caps for slider

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>('');

    const [count, setCount] = useState(1);
    const [size, setSize] = useState(() => ['']);

    const handleCounter = ( count: number ) => {
        setCount(count);
    }
    const handleSize = (event: React.MouseEvent<HTMLElement>, newSize: string[]) => {
        setSize(newSize);
    };

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                setCap(await getCapById(params.id));
                setCaps(await getSliderPost());
                setSize([]);
                setCount(1);
            }catch (e: any) {
                setIsError(e.message);
            }
            setIsLoading(false);
        })()
    }, [params.id]);

    if (isLoading) {
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
                        <div className={cl.main__image}><img src={cap.capsimage[0].photo} alt=""/></div>
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
                                <MyCounter countFunc={handleCounter}/>
                            </div>
                        </div>

                        <div className={cl.main__priceButtonDiv}>
                            <div className={cl.main__price}>{cap.price}сом</div>
                            <MyButton>добавить в корзину</MyButton>
                        </div>
                    </div>

                </div>
                <Typography sx={{textAlign: 'center', margin: '20px 0px', fontWeight: 700}} variant={'h4'}>
                    Похожие товары
                </Typography>
                <Slider caps={caps}/>
            </div>
        );
    } else {
        return <Typography variant={'h2'}>{isError}</Typography>
    }
};

export default PostPage;
