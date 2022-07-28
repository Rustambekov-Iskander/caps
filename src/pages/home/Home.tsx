import React, {useEffect, useState} from 'react';
import MainBanner from "../../components/banner/Banner";
import Slider from "../../components/UI/slider/Slider";
import {ICap} from "../../types/caps";
import {getSliderPost} from "../../utils/services";
import {Typography} from "@mui/material";
import Loader from "../../components/UI/loader/loader";
import MiniCapCards from "../../components/mini-cap-cards/MiniCapCards";
import MiniBanners from "../../components/mini-banner/MiniBanners";
import bannerImg from '../../components/img/main-banner.png';
import secondBannerImg from '../../components/img/second-banner.png';


const Home = () => {
    //slide
    const [capsSlide, setCapsSlide] = useState<ICap[]>([]);

    //page state
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            setCapsSlide(await getSliderPost());
            setIsLoading(false);
        })()
    }, []);


    if (isLoading) {
        return <div className={'container'}><Loader/></div>
    } else if (capsSlide.length) {
        return (
            <div>
                <MainBanner bannerImg={bannerImg}/>
                <div className={'container'}>
                    <MiniCapCards caps={capsSlide}/>
                    <MiniBanners/>
                    <Typography sx={{textAlign: 'center', margin: '20px 0px', fontWeight: 700}} variant={'h4'}>
                        TOP SELLERS <span className={'yellow'}>.</span>
                    </Typography>
                    <Slider caps={capsSlide}/>
                </div>
                <MainBanner caps={capsSlide} buttonColor={'#670098'} color={'white'} bannerImg={secondBannerImg}/>
            </div>
        );
    }else {
        return <Typography variant={'h2'}>Fatal error</Typography>;
    }

}

export default Home;
