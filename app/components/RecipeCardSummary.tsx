"use client";

import { Card } from '@material-tailwind/react'
import { ExpandMore } from '@mui/icons-material'
import { Box, CardActions, CardContent, CardMedia, Collapse, Typography, Link } from '@mui/material'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import React from "react"
import placeholderRecipes from "../lib/placeholderRecipes.json"


interface RecipeCardSummaryProp {
  value: number | null,
  data: {id: number, name: string, image_url: string, dietary: string[], time: string, recipe: string} | null;
  
}

const RecipeCardSummary: React.FC<RecipeCardSummaryProp> = (value) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 const recipe = placeholderRecipes.recipes.find(recipe => recipe.id == value.value)

 
 if(recipe){
  return (
    <>
     <Card> 
     <CardMedia
         className="rounded-lg"
         component="img"
         image='/images/pasta.jpg'
         alt="Paella dish" />
         
         <Box className="shadow-2xl divide-y divide-solid">

          <Link href={`/recipes/recipe/${recipe.id}`} sx={{color: 'inherit'}}>
            <CardContent className="pb-0">
              <Typography className="text-xs md:text-base lg:text-lg font-bold pb-2">
                {recipe.name}
              </Typography>
            </CardContent>
           </Link>
           
           <CardContent sx={{ display: { xs: 'none', sm: 'block' } }}>
           <Typography sx={{ marginBottom: 2 }}>
               Cooking Time: {recipe.time} minutes
             </Typography>
             <Typography variant="body2">
               This impressive paella is a perfect party dish and a fun meal to cook
               together with your guests. Add 1 cup of frozen peas along with the mussels,
               if you like.
             </Typography>
           </CardContent>
         </Box>

         <CardActions disableSpacing sx={{ display: { xs: 'none', sm: 'block' } }}>
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
              {recipe.method}
             </Typography>
           </CardContent>
         </Collapse>
      </Card>
   
    </>  
  )
  }}


export default RecipeCardSummary