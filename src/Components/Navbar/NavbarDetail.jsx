/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavbarDetailCard from "./NavbarDetailCard";
import styles from "./NavbarDetail.module.css";
import { BiBed, BiDotsHorizontal, BiRestaurant } from "react-icons/bi";
import {
  MdOutlineLocalActivity,
  MdHolidayVillage,
  MdOutlineForum,
  MdOutlineAirlineSeatFlat,
  MdDriveFileMoveOutline,
  MdOutlineFlight,
  MdHelpCenter,
  MdOutlineDesignServices,
  MdOutlineAddRoad,
  MdFormatUnderlined,
  MdOutlineSelectAll,
} from "react-icons/md";

import classnames from 'classnames';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

let data = [
  {
    id: 1,
    title: "Hotels",
    path: "#",
    icon: <BiBed />,
  },
  {
    id: 2,
    title: "Things to Do",
    path: "#",
    icon: <MdOutlineLocalActivity />,
  },
  {
    id: 3,
    title: "Vacation Rentals",
    path: "#",
    icon: <MdHolidayVillage />,
  },
  {
    id: 4,
    title: "Restaurants",
    path: "#",
    icon: <BiRestaurant />,
  },
  {
    id: 5,
    title: "Travel Stories",
    path: "#",
    icon: <MdOutlineForum />,
  },
];

let swiperData = [
  {
    title: "Hotels",
    path: "#",
    icon: <BiBed />,
  },
  {
    title: "Things to Do",
    path: "#",
    icon: <MdOutlineLocalActivity />,
  },
  {
    title: "Vacation Rentals",
    path: "#",
    icon: <MdHolidayVillage />,
  },
  {
    title: "Restaurants",
    path: "#",
    icon: <BiRestaurant />,
  },
  {
    title: "Travel Stories",
    path: "#",
    icon: <MdOutlineForum />,
  },
  {
    title: "Airlines",
    path: "#",
    icon: <MdOutlineAirlineSeatFlat />,
  },
  {
    title: "Cruises",
    path: "#",
    icon: <MdDriveFileMoveOutline />,
  },
  {
    title: "Flights",
    path: "#",
    icon: <MdOutlineFlight />,
  },
  {
    title: "Help Center",
    path: "#",
    icon: <MdHelpCenter />,
  },
  {
    title: "Trip Designer",
    path: "#",
    icon: <MdOutlineDesignServices />,
  },
  {
    title: "Road Trips",
    path: "#",
    icon: <MdOutlineAddRoad />,
  },
  {
    title: "Travel Forums",
    path: "#",
    icon: <MdFormatUnderlined />,
  },
  {
    title: "Choice",
    path: "#",
    icon: <MdOutlineSelectAll />,
  },
];

const NavbarDetail = () => {
  return (
    <>
      <div className={classnames(styles.container, styles.topMenu)}>
        {data
          .filter((el, i) => i < data.length)
          .map((el, index) => (
            <NavbarDetailCard key={index} {...el} />
          ))}
        <div style={{ position: 'relative' }}>
          <div className={styles.dropdown}>
            <a className={styles.dropbtn}><NavbarDetailCard title="More" icon={<BiDotsHorizontal />}/></a>
            <div className={styles.dropdown_content}>
              <a href="#">Add a Place</a>
              <a href="#">Airlines</a>
              <a href="#">Cruises</a>
              <a href="#">Flights</a>
              <a href="#">Help Center</a>
              <a href="#">Hire a Trip Designer</a>
              <a href="#">Rental Cars</a>
              <a href="#">Road Trips</a>
              <a href="#">Travel Forums</a>
              <a href="#">Traveler's Choice</a>
            </div>
          </div>
        </div>
      </div>
      <div className={classnames(styles.container, styles.swiperContainer)}>
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
          {swiperData
            .filter((el, i) => i < swiperData.length)
            .map((el, index) => (
              <SwiperSlide key={index}>
                <NavbarDetailCard key={index} {...el} />
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default NavbarDetail;
