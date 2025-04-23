import React from "react";
import { Card } from "./Card";
import mockData from "./mockData.json";
import styles from "./recipes.module.scss";

export const Recipes = () => {
  const articles = mockData.filter(
    (recipe) => recipe.type.toLowerCase() === "article"
  );
  const recipes = mockData.filter(
    (recipe) => recipe.type.toLowerCase() === "recipe"
  );

  return (
    <div>
      <h2 className={styles.title}>Recept</h2>
      <div className={styles.container}>
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            image={recipe.image}
            title={recipe.name}
            profiles={recipe.profiles}
            sponsored={recipe.sponsored}
            type={recipe.type}
          />
        ))}
      </div>
      <h2 className={styles.title}>Artiklar</h2>
      <div className={styles.container}>
        {articles.map((recipe) => (
          <Card
            key={recipe.id}
            image={recipe.image}
            title={recipe.name}
            profiles={recipe.profiles}
            sponsored={recipe.sponsored}
            type={recipe.type}
          />
        ))}
      </div>
    </div>
  );
};
