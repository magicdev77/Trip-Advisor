import React from "react";
import styles from "./ToGoTitle.module.css";

const ToGoTitle = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.titleStyle}>Explore </span>
        <span>{title}</span>
      </h1>
    </div>
  )
}

export default ToGoTitle;