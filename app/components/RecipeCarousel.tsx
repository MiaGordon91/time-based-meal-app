import React from "react";
import RecipeCardSummary from "./RecipeCardSummary";
import Grid from "@mui/material/Grid2";
import { Box, Link, Typography } from "@mui/material";
import RecipeCarouselHeader from "./RecipeCarouselHeader";

interface Recipe {
  id: number;
  name: string;
  image_path: string;
  dietary: string[];
  time: string;
  method: string;
}

interface RecipeCarouselProps {
  supportingText: string
  dietaryParams: string | null,
  timeParams: string | null,
  recipes?: Recipe[],
}

//retrieve ids from database and render
const RecipeCarousel: React.FC<RecipeCarouselProps> = ({supportingText, dietaryParams, timeParams, recipes}) => {
 
  let mdSize = 0;

  if(recipes){
    switch((Object.keys(recipes).length) || recipes.length) {
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
  }
  
  // if no recipes are found do not render RecipeCardSummary Card
  if(recipes) {
    return (
      <>
        <Grid
          container
          sx={{justifyContent:"center", padding: "1.75rem"}}
          >
            <RecipeCarouselHeader text={supportingText} dietaryParams={dietaryParams} timeParams={timeParams} />
              {Object.entries(recipes).map(([index,recipe]) => (
                <Grid key={index} size={{xs: 6, md: mdSize}} sx={{ maxWidth: "600px", padding: "20px" }}>
                  <RecipeCardSummary key={index} data={recipe}/>
                </Grid> 
              ))}
        </Grid>
      </> 
    );  
    } else {
    return (
      <>
      <Box sx={{padding: "0.5rem"}}>
        <RecipeCarouselHeader text={supportingText} dietaryParams={dietaryParams} timeParams={timeParams} />
        <Typography 
          sx={{ 
            fontWeight: 500, 
            fontSize: {xs: "1rem", md: "1.5rem"}, 
            width:"100%", textAlign: "center", 
            paddingTop: "0.5rem"
            }}>
            Please click&nbsp; 
          <Link href="/" sx={{color: "#000000", fontWeight: 600}}>here</Link> to update your preferences
        </Typography>
      </Box>
      </>
    );
  }    
};
export default RecipeCarousel;