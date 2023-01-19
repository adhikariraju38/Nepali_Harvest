import React from 'react';
import './SeasonalCrop.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/1.jpg';
import profilePic2 from '../../img/2.jpg';
import profilePic3 from '../../img/3.jpg';
import profilePic4 from '../../img/1.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import Weather from '../Weather/Weather';
import { Link, useNavigate } from 'react-router-dom';

// import SwiperCore, { Autoplay } from 'swiper';

function SeasonalCrop() {
  // SwiperCore.use([Autoplay]);

  let navigate=useNavigate()
  const handleClick=()=>{
    navigate('/seasonalProduct')
  }


  const clients = [
    {
      img: profilePic1,
      name: 'Recommend crops for current seasons and locations',
    },
    {
      img: profilePic2,
      name: 'Consider Weather and Typical Season',
    },
    {
      img: profilePic3,
      name: 'Helps with planting decisions',
    },
    {
      img: profilePic4,
      name: 'Improves yield and success',
    },
    {
      img: profilePic4,
      name: 'Timing is Important for maximum Harvest',
    },
  ];
  return (
    <div className="t-wrapper" id="SeasonalPicks">
      <div className="left">
        <div className="t-heading">
          <span>I can </span>
          <span>Recommend Crops </span>
          <span>according to seasons</span>
        </div>
        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          loop={true}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="testimonials">
                  <img src={client.img} alt="" />
                  {/* <span>{client.review}</span> */}
                  <span>{client.name}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="button s-button" onClick={handleClick}>Get Recommendation</button>
      </div>

      <div className="right">
        <Weather/>
      </div>
    </div>
  );
}

export default SeasonalCrop;
