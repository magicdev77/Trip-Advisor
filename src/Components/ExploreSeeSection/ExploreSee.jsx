import React from "react";
// import { useNavigate } from "react-router-dom";
// import SqrCard from "../Cards/SqrCard";
import styles from "./ExploreSee.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const ExploreSee = ({ data }) => {

  return (
    <div className={styles.outer}>
      <h1>Explore {data.fields.Title} by interest</h1>
      <h2>See the city after dark</h2>
      <p>Late-night eats, trendy bars, and more</p>
      <div className={styles.container}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 2,
              // direction: 'vertical',
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          loop={false}
        >
          {data ? data.fields.See.map((e) => (
            <SwiperSlide key={e.id}>
              <div>
                <span className={styles.slideText}>{ e.filename.slice(0, e.filename.length - 4).replaceAll("_", " ") }</span>
                <img src={e.url} alt="TopdesAvatar" style={{ width: '100%' }} />
              </div>
            </SwiperSlide>
          )) : 
            <SwiperSlide>
              <div>
                
              </div>
            </SwiperSlide>
          }
        </Swiper>
      </div>
    </div>
  );
};

export default ExploreSee;
