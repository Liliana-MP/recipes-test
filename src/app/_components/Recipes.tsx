import React from "react";
import { RecipeCard } from "./RecipeCard";

export const Recipes = () => {
  const mock = [
    { title: "recipe 1" },
    { title: "recipe 2" },
    { title: "recipe 3" },
  ];
  return (
    <div>
      {mock.map((r) => (
        <RecipeCard key={r.title} title={r.title} />
      ))}
    </div>
  );
};
