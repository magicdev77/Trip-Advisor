import React from "react";
import styles from "./About.module.css";

const About = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <h1 className={styles.title}>About {data.fields.Title}</h1>
        <div className={styles.text}>{data.fields.About}</div>
      </div>
    </div>
  );
};

export default About;
