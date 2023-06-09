/* eslint-disable array-callback-return */
import React from "react";
import ReactStars from "react-rating-stars-component";
import classnames from "classnames";
import { BiHeart } from "react-icons/bi";

import styles from "./Directory.module.css";

const { format } = require("date-fns");

const DirectorySection = ({ data }) => {
  return (
    <div className={classnames(styles.container, styles.slideGrid)}>
      {data ? (
        data.map((e) => (
          <div className={classnames(styles.slideItem)}>
            <div
              style={{ backgroundImage: `url(${e.fields.image_url})` }}
              className={styles.cover_image}
            ></div>
            <div>
              <span className={styles.heartBtn}>
                <BiHeart />
              </span>
            </div>
            <div className={styles.slideItemFooterBar}>
              <div>
                <span
                  style={{ fontWeight: "bold" }}
                >{`${e.fields.province}, ${e.fields.country}`}</span>
                <ReactStars
                  count={5}
                  value={e.fields.rating}
                  isHalf={true}
                  size={24}
                  activeColor="#00aa6c"
                  onChange={null}
                />
              </div>
              <div>
                <span style={{ color: "#717171" }}>{e.fields.away}</span>
                <span style={{ color: "#717171" }}> kilometers away</span>
              </div>
              <div>
                <span style={{ color: "#717171" }}>
                  {format(new Date(e.fields.start_date), "MMM d")} -{" "}
                </span>
                <span style={{ color: "#717171" }}>
                  {format(new Date(e.fields.end_date), "MMM d")}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>$ {e.fields.price}</span>
                <span> night</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default DirectorySection;
