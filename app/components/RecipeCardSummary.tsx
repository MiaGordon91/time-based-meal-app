import React from "react";
import placeholderRecipes from "../lib/placeholderRecipes.json";
import RecipeCardClient from "./RecipeCardClient";

interface RecipeCardSummaryProp {
  // value: number | null,
  recipe: {id: number, name: string, image_url: string, dietary: string[], time: string, method: string} | null;
  
}

const RecipeCardSummary: React.FC<RecipeCardSummaryProp> = (recipe) => {

  //To update: fetch data from postgres
  // const recipe = placeholderRecipes.recipes.find(recipe => recipe.id == value.value);
 
 if(recipe){
  return (
    <RecipeCardClient 
      recipeId={recipe.recipe?.id}
      recipeImage={recipe.recipe?.image_url}
      recipeName={recipe.recipe?.name}
      recipeTime={recipe.recipe?.time}
      recipeMethod={recipe.recipe?.method}
    />
  );
  }};


export default RecipeCardSummary;