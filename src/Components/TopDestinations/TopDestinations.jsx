/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./TopDestinations.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box, Img } from "@chakra-ui/react";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function TopDestinations({ data }) {
  return (
    <div className={styles.outer}>
      <h2>Top destinations for your next vacation</h2>
      <div className={styles.container}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
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
            <SwiperSlide key={e.id}>
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

      <Box bgColor="#F2F2F2" margin="80px 0" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box className={styles.leftTextBox}>
          <Img
            style={{ padding: '15px', width: '100%' }}
            src="wanderer.jpg" 
          />
        </Box>
        <Box className={styles.rightTextBox }>
          <h2><center>Watch The Wanderer</center></h2>
          <p><center>Follow Cam Mackintosh in the guise of The Wanderer, as he dives into the fascinating emirate of Abu Dhabi. Explore each step of his travel guide among deserts' hidden gems. Follow along on his epic journey.</center></p>
          <a className={ styles.blackBtn }>Stream now</a>
        </Box>
      </Box>
    </div>
  );
}

export default TopDestinations;
