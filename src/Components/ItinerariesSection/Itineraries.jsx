import React from "react";
import ItinerariesCard from "./ItinerariesCard";
import styles from "./Itineraries.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Itineraries = ({ data }) => {
  return (
    <>
      {data.fields.Itineraries ? (
        <div className={styles.mainContainer}>
          <div className={styles.subContainer}>
            <h1>Itineraries from real travelers</h1>
            <h2>What to see and do, from people who have been there</h2>
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
                {data.fields.Itineraries.map((el, i) => (
                  <SwiperSlide key={i}>
                    <ItinerariesCard {...el} key={i} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Itineraries;
