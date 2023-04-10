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
    icon: <BiBed />,
  },
  {
    id: 2,
    title: "Things to Do",
    icon: <MdOutlineLocalActivity />,
  },
  {
    id: 3,
    title: "Vacation Rentals",
    icon: <MdHolidayVillage />,
  },
  {
    id: 4,
    title: "Restaurants",
    icon: <BiRestaurant />,
  },
  {
    id: 5,
    title: "Travel Stories",
    icon: <MdOutlineForum />,
  },
];

let swiperData = [
  {
    title: "Hotels",
    icon: <BiBed />,
  },
  {
    title: "Things to Do",
    icon: <MdOutlineLocalActivity />,
  },
  {
    title: "Vacation Rentals",
    icon: <MdHolidayVillage />,
  },
  {
    title: "Restaurants",
    icon: <BiRestaurant />,
  },
  {
    title: "Travel Stories",
    icon: <MdOutlineForum />,
  },
  {
    title: "Airlines",
    icon: <MdOutlineAirlineSeatFlat />,
  },
  {
    title: "Cruises",
    icon: <MdDriveFileMoveOutline />,
  },
  {
    title: "Flights",
    icon: <MdOutlineFlight />,
  },
  {
    title: "Help Center",
    icon: <MdHelpCenter />,
  },
  {
    title: "Trip Designer",
    icon: <MdOutlineDesignServices />,
  },
  {
    title: "Road Trips",
    icon: <MdOutlineAddRoad />,
  },
  {
    title: "Travel Forums",
    icon: <MdFormatUnderlined />,
  },
  {
    title: "Choice",
    icon: <MdOutlineSelectAll />,
  },
];

const NavbarDetail = ({ place }) => {
  return (
    <>
      <div className={classnames(styles.container, styles.topMenu)}>
        {data
          .filter((el, i) => i < data.length)
          .map((el, index) => (
            <NavbarDetailCard key={index} path={`/directory/?option=${el.title}&place=${place ? place : 'all'}`} {...el} />
          ))}
        <div style={{ position: 'relative' }}>
          <div className={styles.dropdown}>
            <a className={styles.dropbtn}><NavbarDetailCard title="More" icon={<BiDotsHorizontal />}/></a>
            <div className={styles.dropdown_content}>
              <a href={`/directory/?option=Airlines&place=${place ? place : 'all'}`}>Airlines</a>
              <a href={`/directory/?option=Cruises&place=${place ? place : 'all'}`}>Cruises</a>
              <a href={`/directory/?option=Flights&place=${place ? place : 'all'}`}>Flights</a>
              <a href={`/directory/?option=Help Center&place=${place ? place : 'all'}`}>Help Center</a>
              <a href={`/directory/?option=Trip Designer&place=${place ? place : 'all'}`}>Hire a Trip Designer</a>
              <a href={`/directory/?option=Rental Cars&place=${place ? place : 'all'}`}>Rental Cars</a>
              <a href={`/directory/?option=Road Trips&place=${place ? place : 'all'}`}>Road Trips</a>
              <a href={`/directory/?option=Travel Forums&place=${place ? place : 'all'}`}>Travel Forums</a>
              <a href={`/directory/?option=Choice&place=${place ? place : 'all'}`}>Traveler's Choice</a>
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
              slidesPerView: 1,
              // direction: 'vertical',
            },
            498: {
              slidesPerView: 2,
            },
            808: {
              slidesPerView: 3,
            },
            1082: {
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
                <NavbarDetailCard key={index} path={`/directory/?option=${el.title}&place=${place ? place : 'all'}`} {...el} />
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default NavbarDetail;
