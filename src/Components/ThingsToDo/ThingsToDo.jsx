import React from "react";
// import SqrCard from "../Cards/SqrCard";
import styles from "./ThingsToDo.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const ThingsToDo = ({ data }) => {
  return (
    <div className={styles.outer}>
      <h2>Where to go, right now</h2>
      <p>Spots at the top of travelers’ must-go lists</p>
      <div className={styles.container}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
          loop={false}
        >
          {data.map((e) => (
            <SwiperSlide key={e.id}>
              <div>
                <span className={styles.slideText}>{ e.fields.Name }</span>
                <img src={e.fields.Attachment[0].url} alt="TopdesAvatar" style={{ width: '100%' }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThingsToDo;
