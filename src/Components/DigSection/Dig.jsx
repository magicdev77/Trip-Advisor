import React from 'react'
import DigCard from './DigCard'
import styles from "./Dig.module.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Dig = ({ data }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <h1>Traveler Spotlight</h1>
        <h2>Dig into {data.fields.Title} and beyond</h2>
        <div className={styles.container}>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation={true}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                // direction: 'vertical',
              },
              900: {
                slidesPerView: 2,
              },
              1184: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={false}
          >
            {data.fields.Dig
              .map((el, i) => (
                <SwiperSlide key={i}>
                  <DigCard {...el} key={i} />
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Dig
