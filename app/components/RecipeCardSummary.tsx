import React from "react";
import RecipeCardClient from "./RecipeCardClient";

interface RecipeCardSummaryProp {
  data: {id: number, name: string, image_url: string, dietary: string[], time: string, method: string} | null;
} 

const RecipeCardSummary: React.FC<RecipeCardSummaryProp> = ({data}) => {

 if(data){
  return (
    <RecipeCardClient 
      recipeId={data?.id}
      recipeImage={data?.image_url}
      recipeName={data?.name}
      recipeTime={data?.time}
      recipeMethod={data?.method}
    />
  );
  }};


export default RecipeCardSummary;