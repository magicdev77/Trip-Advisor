import React from "react";
import { useNavigate } from "react-router-dom";
// import SqrCard from "../Cards/SqrCard";
import styles from "./ThingsToDo.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const ThingsToDo = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.outer}>
      <h2>Where to go, right now</h2>
      <p>Spots at the top of travelers’ must-go lists</p>
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
          {data ? data.map((e) => (
            <SwiperSlide key={e.id} onClick={() => {navigate(`/detailgotoinfo/${e.id}`)}} style={{ cursor: "pointer" }}>
              <div>
                <span className={styles.slideText}>{ e.fields.Title }</span>
                <img src={e.fields.Attachment[0].url} alt="TopdesAvatar" style={{ width: '100%' }} />
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

export default ThingsToDo;
