import React from "react";
// import { useNavigate } from "react-router-dom";
// import SqrCard from "../Cards/SqrCard";
import styles from "./ExplorePop.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import ReactStars from "react-rating-stars-component";
import { BiHeart } from "react-icons/bi";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const ExplorePop = ({ data }) => {
  return (
    <>
      {data.fields.Pop ? (
        <div className={styles.outer}>
          <h2>Pop culture comes to life</h2>
          <p>Anime museums and shops, arcades, and more</p>
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
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              loop={false}
            >
              {data.fields.Pop.map((e) => (
                <SwiperSlide key={e.id}>
                  <div>
                    <span className={styles.heartBtn}>
                      <BiHeart />
                    </span>
                    <img
                      src={e.url}
                      alt="TopdesAvatar"
                      style={{ width: "100%" }}
                    />
                    <p className={styles.slideText}>
                      {e.filename
                        .slice(0, e.filename.length - 4)
                        .replaceAll("_", " ")}
                    </p>
                    <div className={styles.rateArea}>
                      <div className={styles.rateMask}></div>
                      <ReactStars
                        count={5}
                        value={4}
                        isHalf={true}
                        size={24}
                        activeColor="#00aa6c"
                        onChange={null}
                      />
                      <span className={styles.rateText}>5633</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ExplorePop;
