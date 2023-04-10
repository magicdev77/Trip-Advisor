/* eslint-disable array-callback-return */
import React from "react";
import ReactStars from "react-rating-stars-component";
import classnames from 'classnames';

import styles from "./Directory.module.css";

const DirectorySection = ({ data }) => {

  return (
    <div className={classnames(styles.container, styles.slideGrid)}>
      {data ? (
        data.map((e) => (
          <div className={classnames(styles.slideItem)}>
            <div style={{ backgroundImage: `url(${e.fields.image_url})` }} className={styles.cover_image}>
            </div>
            <div className={styles.slideItemFooterBar}>
              <div>
                <span>{`${e.fields.province}, ${e.fields.country}`}</span>
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
                <span>$ {e.fields.price}</span>
                <span>night</span>
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
