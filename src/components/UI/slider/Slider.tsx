import React, {FC, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import cl from './Slider.module.scss';
import SliderItem from "./SliderItem";
import {ICaps} from "../../../types/caps";
import {Link} from "react-router-dom";


const Slider: FC<ICaps> = ({caps}) => {
    const screenWidth = window.screen.width;
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
        }
    }, []);



    return (
        <>
        <Swiper
            className={cl.slideList}
            modules={[Navigation]}
            spaceBetween={60}
            slidesPerView={slidePer}
            navigation
            scrollbar={{ draggable: true }}
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
        </>
    );
};

export default Slider;
