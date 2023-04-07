import React from "react";
import styles from "./Itineraries.module.css";
import { BiHeart } from "react-icons/bi";

const ItinerariesCard = ({ url, filename }) => {
  return (
    <div className={styles.box}>
      <span className={styles.heartBtn}>
        <BiHeart />
      </span>
      <div>
        <img src={url} alt="error" />
      </div>
      <div>
        <p>
          From <span>Tripadvisor</span>
        </p>
        <p>{filename.slice(0, filename.length - 4).replaceAll("_", " ")}</p>
      </div>
    </div>
  );
};
export default ItinerariesCard;
