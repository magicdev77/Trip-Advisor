import React from "react";
import styles from "./ImageDetailBox.module.css"

const ImageDetailBox = ({ data }) => {

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <div style={{ width: '60%' }}>
          <img src={data.fields.Explore[2].url} alt="TopdesAvatar" style={{ width: '100%' }}/>
        </div>
        <div style={{ width: '40%' }}>
          <img src={data.fields.Explore[1].url} className={styles.image} alt="TopdesAvatar" />
          <img src={data.fields.Explore[0].url} className={styles.image} alt="TopdesAvatar" />
        </div>
      </div>
    </div>
  );
}

export default ImageDetailBox;