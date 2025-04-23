import React from "react";
import { Card } from "./Card";
import mockData from "./mockData.json";
import styles from "./cardContainer.module.scss";

export const CardContainer = () => {
  return (
    <div className={styles.container}>
      {mockData.map((recipe) => (
        <Card data={recipe} key={recipe.id} />
      ))}
    </div>
  );
};
