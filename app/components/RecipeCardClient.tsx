"use client";

import React, { useState } from "react";
import {Box, Card, CardActions, CardContent, CardMedia, Collapse, Link, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { ExpandMore } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

interface RecipeCardClientProps {
  recipeId?: number,
  recipeName?: string,
  recipeTime?: string,
  recipeMethod?: string,
  recipeImage?: string,
  recipeSummary?: string,
}

const RecipeCardClient: React.FC<RecipeCardClientProps> = ({recipeId,recipeName, recipeTime, recipeMethod, recipeImage, recipeSummary}) => {

    const [expanded, setExpanded] = useState<boolean>(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

  return (
    <>
    <Card> 
     <CardMedia
         component="img"
         sx={{ height: {xs: 100, md: 200}, borderRadius: "0.5rem" }}
         image={recipeImage}
         alt={recipeName} />
         
         <Box sx={{
          boxShadow: 4,
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "divider",  
          }}>

          <Link href={`/recipes/recipe/${recipeId}`} sx={{color: "inherit"}}>
            <CardContent sx={{ paddingBottom: "0rem" }}>
              <Typography sx={{ fontSize: {xs: "0.75rem", sm:"1rem", md: "1.25rem"}, fontWeight: 700, width:"100%", paddingBottom: "0.5rem"}}>
                {recipeName}
              </Typography>

              <Typography sx={{ fontSize: {xs: "0.75rem", md: "1rem"} }}> <AccessTimeFilledIcon sx={{ display:{xs:"none", sm: "inline"}, color: pink[500]}} /> {recipeTime} mins </Typography>
      
            </CardContent>
           </Link>
           
           <CardContent sx={{ display: { xs: "none", sm: "block" }, minHeight:{sm:80, md:140, lg: 120} }}>
             <Typography sx={{ fontSize: {xs: "0.75rem", md: "1rem"} }}>
               {recipeSummary}
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
        <Typography sx={{ marginBottom: 2, fontWeight: 800, fontSize: {xs: "0.75rem", md: "1.25rem"} }}>Method:</Typography>
        <Typography sx={{ marginBottom: 2, fontSize: {xs: "0.75rem", md: "1rem"}  }}>
          {recipeMethod}
        </Typography>
      </CardContent>
    </Collapse>
    </Card>
    </>
  );

};

export default RecipeCardClient;