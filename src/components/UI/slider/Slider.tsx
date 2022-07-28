import React, {FC, useEffect, useState} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Scrollbar} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import cl from './Slider.module.scss';
import {ICaps} from "../../../types/caps";
import {Link} from "react-router-dom";
import SliderItem from "./SliderItem";



const Slider: FC<ICaps> = ({caps}) => {
    const screenWidth = window.screen.width;
    const [scrollBar, setScrollBar] = useState<boolean>(false);
    const [slidePer, setSlidePer] = useState<number>(3);

    useEffect(() => {
        // adaptive for slider
        if (screenWidth > 770) {
            setSlidePer(3);
        }
        if (screenWidth < 770 && screenWidth > 480) {
            setSlidePer(2);
        }
        if (screenWidth < 480) {
            setSlidePer(1);
            setScrollBar(true);
        }
    }, []);



    return (
        <div>
            <Swiper
                className={cl.slideList}
                modules={[Navigation, Scrollbar]}
                navigation={!scrollBar}
                scrollbar={scrollBar ?{ draggable: true } :false}
                spaceBetween={60}
                slidesPerView={slidePer}
            >

                {
                    caps.map( (cap) => (
                        <SwiperSlide key={cap.id}>
                            <Link to={`/catalog/${cap.id}`}>
                                <SliderItem cap={cap}/>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};


export default Slider;
