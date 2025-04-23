import React from "react";
import { Card } from "./Card";
import mockData from "./mockData.json";
import styles from "./cardContainer.module.scss";

export const CardContainer = () => {
  return (
    <div className={styles.container}>
      {mockData.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
};
