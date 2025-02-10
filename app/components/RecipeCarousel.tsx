import React from "react";
import RecipeCardSummary from "./RecipeCardSummary";
import Grid from "@mui/material/Grid2";
import { Typography } from "../MTailwind";

interface RecipeCarouselProps {
  recipeIds: string[]
  dietaryParams: string
  timeParams: string
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({recipeIds = [], dietaryParams, timeParams}) => {
 
  let mdSize = 0;

  switch(recipeIds.length) {
    case 4: 
      mdSize = 3;
      break;
    case 3:
      mdSize = 4;
      break;
    case 2:
      mdSize = 6;
      break;
    case 1:
      mdSize = 12;
  }
    
  const supportingText = "A selection of carefully selected meal ideas suited to your dietaries and time preferences";

  function Header() {
    const text = "Recipes for you";

    return(
    <>
      <h1 className="font-bold md:text-4xl w-full text-center pb-4">{text}</h1>
      <h2 className="text-base md:text-3xl w-full text-center pb-2">Dietary: {dietaryParams?.replace(/^./, dietaryParams[0].toUpperCase())} | Cooking Time: {timeParams} minutes</h2>
    </>
    );
  }

  return(
      <Grid
        container 
        className="md:px-7 mx-5 md:mx-9 pt-10"
        justifyContent="center"
        >
          <Grid className='p-2 md:p-5 bg-gray-100 rounded-lg' size={{xs: 12}}>
            <Header />
          </Grid>
          <Grid className='p-3 md:p- rounded-lg' size={{xs: 12}}>
            <Typography className="text-base md:text-2xl w-full text-center">{supportingText}</Typography>
          </Grid> 

          {recipeIds?.map((x,index) => (
            <Grid key={index} size={{xs: 6, md: mdSize}} sx={{ maxWidth: "600px", padding: "20px" }}>
              <RecipeCardSummary data={null} value={parseInt(x)}/>
            </Grid> 
          ))}
      </Grid>
  );
     
};
export default RecipeCarousel;