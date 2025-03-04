import { Card, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardListTemplate from "./CardListTemplate";

interface RecipeListProps {
    recipeObject: {id: number, name: string, image_path: string, dietary: string[], time: string, method: string, ingredients: string[] | undefined };
}

 const RecipeList: React.FC<RecipeListProps> = ({recipeObject}) => {

 const ingredients = recipeObject ? recipeObject.ingredients : undefined;
 const method = recipeObject ? recipeObject.method : undefined;
  
  return (
    <>
    <Grid 
    container 
    spacing={2} 
    sx={{padding:"0.5rem", backgroundColor: "#f5f5f5", justifyContent: "center"}}
    >   
        <Grid sx={{ maxWidth: "400px", padding: "20px" }}>
            <Card sx={{ boxShadow: "none", maxWidth: "400px", margin: "0 auto" }}> 
                <CardMedia
                    sx={{borderRadius: "0.5rem"}}
                    component="img"
                    image={recipeObject.image_path}
                    alt={recipeObject.name}
                />
            </Card>
        </Grid>

        <Grid sx={{ maxWidth: "400px", padding: "20px" }}>
            <Typography 
                sx={{fontWeight: "700", fontSize: {xs: "1rem", md: "1.875rem"}, paddingBottom: "1.75rem"}}
                align="left">
                {recipeObject.name}
            </Typography>
            <Typography 
                sx={{fontWeight: "700", fontSize: {xs: "0.75rem", md: "1.25rem"}, paddingBottom: "1.25rem", align: "left"}}
                >
                Cooking Time: {recipeObject.time} minutes
            </Typography>
            <Typography 
                sx={{fontSize: {xs: "0.75rem", md: "1.25rem"}, align: "left"}}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum quam sed semper dictum. Praesent tincidunt sapien nibh, non luctus eros molestie in. Suspendisse eu fringilla enim, eget tincidunt ipsum. Nulla hendrerit convallis cursus.
            </Typography>
        </Grid>
    </Grid>

    <Grid 
        container 
        spacing={2}
        sx={{ padding: "20px", justifyContent:"center" }} 
        >
        <CardListTemplate recipeObject={ingredients}/>
        <CardListTemplate recipeObject={method}/>
    </Grid>
    </>
  );
};

export default RecipeList;