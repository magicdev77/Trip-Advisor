import React from "react";
import styles from "./MoreToExplore.module.css";
import { BiHeart } from "react-icons/bi";

const MoreToExploreCard = ({ imgUrl, title }) => {
  return (
    <div className={styles.box}>
      <span className={styles.heartBtn}>
        <BiHeart />
      </span>
      <div>
        <img src={imgUrl} alt="error" />
      </div>
      <div>
        <p>
          From <span>Tripadvisor</span>
        </p>
        <p>{title}</p>
      </div>
    </div>
  );
};
export default MoreToExploreCard;
