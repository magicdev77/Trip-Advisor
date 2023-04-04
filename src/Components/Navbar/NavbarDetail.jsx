/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavbarDetailCard from "./NavbarDetailCard";
import styles from "./NavbarDetail.module.css";
import { BiBed, BiDotsHorizontal, BiRestaurant } from "react-icons/bi";
import {
  MdOutlineLocalActivity,
  MdHolidayVillage,
  MdOutlineForum,
} from "react-icons/md";

let data = [
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
];

const NavbarDetail = () => {
  return (
    <div className={styles.container}>
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
  );
};

export default NavbarDetail;
