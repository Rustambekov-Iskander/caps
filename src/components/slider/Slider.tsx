import React, {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import cl from './Slider.module.scss';
import SliderItem from "./SliderItem";
import {ICaps} from "../../types/caps";


const Slider: FC<ICaps> = ({caps}) => {
    return (
        <>
        <Swiper
            className={cl.slideList}
            modules={[Navigation]}
            spaceBetween={60}
            slidesPerView={3}
            navigation
            scrollbar={{ draggable: true }}
        >
            {
                caps.map( (cap) => (
                    <SwiperSlide>
                        <SliderItem cap={cap}/>
                    </SwiperSlide>
                ))
            }

        </Swiper>
        </>
    );
};

export default Slider;
