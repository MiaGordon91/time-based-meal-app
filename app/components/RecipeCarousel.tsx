import React from "react";
import RecipeCardSummary from "./RecipeCardSummary";
import Grid from "@mui/material/Grid2";
import { Box, Link, Typography } from "@mui/material";

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
  dietaryParams: string,
  timeParams: string,
  recipes: Recipe[],
}

//retrieve ids from database and render
const RecipeCarousel: React.FC<RecipeCarouselProps> = ({supportingText, dietaryParams, timeParams, recipes}) => {
 
  let mdSize = 0;

  switch((Object.keys(recipes).length)) {
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
  

  function Header() {
    return (
      <>
      <Grid
        container 
        sx={{paddingInline: {md: "1.75rem" }}}
        >
        <Grid sx={{padding: "0.5rem", backgroundColor: "#f5f5f5"}} size={{xs: 12}}>
          <Typography sx={{ fontWeight: 700, fontSize: {md: "2.25rem"}, width:"100%", textAlign: "center", paddingBottom: "0.5rem"}}>Recipes for you</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: {xs: "1rem", md: "1.875rem"}, width:"100%", textAlign: "center", paddingBottom: "0.5rem"}}>{dietaryParams?.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}  | {timeParams} minutes</Typography>
        </Grid>
        <Grid sx={{padding: "0.75rem", borderRadius: "0.5rem"}} size={{xs: 12}}>
          <Typography sx={{ fontWeight: 500, fontSize: {xs: "1rem", md: "1.5rem"}, width:"100%", textAlign: "center", paddingTop: "0.5rem"}}>{supportingText}</Typography>
        </Grid>
      </Grid>
      </>
    );
  }

  // if no recipes are found do not render RecipeCardSummary Card
  if(recipes.length == 0) {
    return (
      <>
      <Box sx={{padding: "0.5rem"}}>
        <Header />
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
  return (
      <>
       <Grid
        container
        sx={{justifyContent:"center", padding: "1.75rem"}}
        >
          <Header />
            {Object.entries(recipes).map(([index,recipe]) => (
              <Grid key={index} size={{xs: 6, md: mdSize}} sx={{ maxWidth: "600px", padding: "20px" }}>
                <RecipeCardSummary key={index} data={recipe}/>
              </Grid> 
            ))}
      </Grid>
    </>
  );
     
};
export default RecipeCarousel;