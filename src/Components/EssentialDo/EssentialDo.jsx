/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./EssentialDo.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { BiHeart } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import classnames from 'classnames';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const EssentialDo = ({ data }) => {

  return (
    <div className={styles.outer}>
      <h1>Essential {data.fields.Title}</h1>
      <div className={styles.container}>
        <div className={styles.leftTextGroup}>
          <h2>Do</h2>
          <p>Places to see, ways to wander, and signature experiences that define {data.fields.Title}.</p>
          <a className={styles.moreBtn}>See all</a>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          className={classnames(styles.swiperArea, "mySwiper")}
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
          {data.fields.Do ? (
            data.fields.Do.map((e) => (
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
                    src={e.url}
                    alt="TopdesAvatar"
                    style={{ width: "100%" }}
                  />
                  <p className={styles.recommendBtn}>
                    {" "}
                    { e.filename.slice(0, e.filename.length - 4).replaceAll("_", " ") }{" "}
                  </p>
                  <p className={styles.slideText}>{e.Title}</p>
                  <div className={styles.rateArea}>
                    <div className={styles.rateMask}></div>
                    <ReactStars
                      count={5}
                      // value={e.fields.Value}
                      isHalf={true}
                      size={24}
                      activeColor="#00aa6c"
                      onChange={null}
                    />
                    <span className={styles.rateText}>123123</span>
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

export default EssentialDo;
