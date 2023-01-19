import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './TopCrops.css';
import Potato from '../../img/topcrop1.jpg';
import Cabbage from '../../img/topcrop2.jpg';
import Cauliflower from '../../img/topcrop3.jpg';
import Tomato from '../../img/topcrop4.jpg';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

const TopCrops = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="topcrops" id="topcrops">
      {/* Heading */}
      <span>Most Important</span>
      <span>Crops</span>

      {/* Slider */}
      <Swiper
        spaceBetween={200}
        slidesPerView={3}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        className="topcrops-slider"
      >
        <SwiperSlide>
          <img src={Potato} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cabbage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cauliflower} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tomato} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopCrops;
