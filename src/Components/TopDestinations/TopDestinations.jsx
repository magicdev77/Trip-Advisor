import React from "react";
import styles from "./TopDestinations.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function TopDestinations({ data }) {
  return (
    <div className={styles.outer}>
      <h2>Top destinations for your next vacation</h2>
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
}

export default TopDestinations;
