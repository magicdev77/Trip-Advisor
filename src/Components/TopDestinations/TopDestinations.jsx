import React from "react";
import styles from "./TopDestinations.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const data = [
  {
    id: 1,
    imgUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=600&h=600&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73",
    title: "Dubai, United Arab Emitates",
  },
  {
    id: 2,
    imgUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=600&h=600&s=1",
    title: "Bangluru, India",
  },
  {
    id: 3,
    imgUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/d7/80/caption.jpg?w=600&h=600&s=1",
    title: "Pune, India",
  },
  {
    id: 4,
    imgUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=600&h=600&s=1",
    title: "Hyderabad, India",
  },
  {
    id: 5,
    imgUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=600&h=600&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73",
    title: "Dubai, United Arab Emitates",
  },
  {
    id: 6,
    imgUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=600&h=600&s=1",
    title: "Bangluru, India",
  },
  {
    id: 7,
    imgUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/d7/80/caption.jpg?w=600&h=600&s=1",
    title: "Pune, India",
  },
  {
    id: 8,
    imgUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=600&h=600&s=1",
    title: "Hyderabad, India",
  },
];

function TopDestinations() {
  return (
    <div className={styles.outer}>
      <h2>Top destinations for your next vacation</h2>
      <div className={styles.container}>
        {/* {data.map((el, i) => (
          <TopDestinationsCard {...el} key={i} />
        ))} */}
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
        //   centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: true,
          // }}
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
                <span className={styles.slideText}>{ e.title }</span>
                <img src={e.imgUrl} alt="TopdesAvatar" style={{ width: '100%' }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TopDestinations;
