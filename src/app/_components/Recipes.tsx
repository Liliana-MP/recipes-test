import React from "react";
import { RecipeCard } from "./RecipeCard";
import mockData from "./mockData.json";

export const Recipes = () => {
  return (
    <div>
      {mockData.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          image={recipe.image}
          title={recipe.name}
          profiles={recipe.profiles}
          sponsored={recipe.sponsored}
          type={recipe.type}
        />
      ))}
    </div>
  );
};
