import React from "react";
import RecipeCardClient from "./RecipeCardClient";

interface RecipeCardSummaryProp {
  data: {id: number, name: string, image_path: string, dietary: string[], time: string, method: string} | null;
} 

const RecipeCardSummary: React.FC<RecipeCardSummaryProp> = ({data}) => {

 if(data){
  return (
    <RecipeCardClient 
      recipeId={data?.id}
      recipeImage={data?.image_path}
      recipeName={data?.name}
      recipeTime={data?.time}
      recipeMethod={data?.method}
    />
  );
  }};


export default RecipeCardSummary;