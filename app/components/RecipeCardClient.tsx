"use client";

import React from "react";
import {Box, Card, CardActions, CardContent, CardMedia, Collapse, Link, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "@mui/icons-material";

interface RecipeCardClientProps {
  recipeId: number,
  recipeName: string,
  recipeTime: string,
  recipeMethod: string
}

const RecipeCardClient: React.FC<RecipeCardClientProps> = ({recipeId,recipeName, recipeTime, recipeMethod}) => {

    const [expanded, setExpanded] = React.useState<boolean>(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

  return (
    <>
    <Card> 
     <CardMedia
         className="rounded-lg"
         component="img"
         image='/images/pasta.jpg'
         alt="Paella dish" />
         
         <Box className="shadow-2xl divide-y divide-solid">

          <Link href={`/recipes/recipe/${recipeId}`} sx={{color: "inherit"}}>
            <CardContent className="pb-0">
              <Typography className="text-xs md:text-base lg:text-lg font-bold pb-2">
                {recipeName}
              </Typography>
            </CardContent>
           </Link>
           
           <CardContent sx={{ display: { xs: "none", sm: "block" } }}>
           <Typography sx={{ marginBottom: 2 }}>
               Cooking Time: {recipeTime} minutes
             </Typography>
             <Typography variant="body2">
               This impressive paella is a perfect party dish and a fun meal to cook
               together with your guests. Add 1 cup of frozen peas along with the mussels,
               if you like.
             </Typography>
           </CardContent>
         </Box>

    <CardActions disableSpacing sx={{ display: { xs: "none", sm: "block" } }}>
      <ExpandMore
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
        <Typography sx={{ marginBottom: 2 }}>
          {recipeMethod}
        </Typography>
      </CardContent>
    </Collapse>
    </Card>
    </>
  );

};

export default RecipeCardClient;