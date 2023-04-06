/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./TopExperience.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { BiHeart } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function TopExperience({ data }) {
  // const navigate = useNavigate();

  return (
    <div className={styles.outer}>
      <h2>Top Experiences on Tripadvisor</h2>
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
          {data ? (
            data.map((e) => (
              <SwiperSlide
                key={e.id}
                // onClick={() => {
                //   navigate(`/detailInfo/${e.id}`);
                // }}
                // style={{ cursor: "pointer" }}
              >
                <div>
                  <span className={styles.heartBtn}>
                    <BiHeart />
                  </span>
                  <img
                    className={styles.swiperItemImg}
                    src={e.fields.Attachment[0].url}
                    alt="TopdesAvatar"
                    style={{ width: "100%" }}
                  />
                  <p className={styles.recommendBtn}>
                    {" "}
                    {e.fields.Status === "In progress"
                      ? "Best Seller"
                      : e.fields.Status === "Done"
                      ? "LIKELY TO SELL OUT"
                      : null}{" "}
                  </p>
                  <p className={styles.slideText}>{e.fields.Title}</p>
                  <div className={styles.rateArea}>
                    <div className={styles.rateMask}></div>
                    <ReactStars
                      count={5}
                      value={e.fields.Value}
                      isHalf={true}
                      size={24}
                      activeColor="#00aa6c"
                      onChange={null}
                    />
                    <span className={styles.rateText}>{e.fields.Count}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div></div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default TopExperience;
