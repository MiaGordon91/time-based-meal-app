import React from "react";
import placeholderRecipes from "../lib/placeholderRecipes.json";
import RecipeCardClient from "./RecipeCardClient";

interface RecipeCardSummaryProp {
  value: number | null,
  data: {id: number, name: string, image_url: string, dietary: string[], time: string, recipe: string} | null;
  
}

const RecipeCardSummary: React.FC<RecipeCardSummaryProp> = (value) => {

  //To update: fetch data from postgres
  const recipe = placeholderRecipes.recipes.find(recipe => recipe.id == value.value);

 
 if(recipe){
  return (
    <RecipeCardClient 
      recipeId={recipe.id}
      recipeName={recipe.name}
      recipeTime={recipe.time}
      recipeMethod={recipe.method}
    />
  );
  }};


export default RecipeCardSummary;