import React from "react";
import SqrCard from "../Cards/SqrCard";
import styles from "./ThingsToDo.module.css";

const ThingsToDo = ({ data }) => {
  return (
    <div className={styles.outer}>
      <h2>Where to go, right now</h2>
      <p>Spots at the top of travelers’ must-go lists</p>
      <div className={styles.container}>
        {data.thingsToDo &&
          data.thingsToDo
            .filter((el, i) => i < 10)
            .map((el, i) => (
              <div className={styles.box}>
                <SqrCard key={i} {...el} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default ThingsToDo;
