import React from "react";
import styles from "./ToGoTitle.modules.css";

const ToGoTitle = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>
        <span className>Explore</span>
        <span>{title}</span>
      </h1>
    </div>
  )
}

export default ToGoTitle;