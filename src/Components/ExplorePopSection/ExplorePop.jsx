import React from "react";
// import { useNavigate } from "react-router-dom";
// import SqrCard from "../Cards/SqrCard";
import styles from "./ExplorePop.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const ExplorePop = ({ data }) => {

  return (
    <div className={styles.outer}>
      <h2>Pop culture comes to life</h2>
      <p>Anime museums and shops, arcades, and more</p>
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
          {data ? data.fields.Pop.map((e) => (
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

export default ExplorePop;
