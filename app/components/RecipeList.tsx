import { Card, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardListTemplate from "./CardListTemplate";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

interface RecipeListProps {
    recipeObject: {id: number, name: string, image_path: string, dietary: string[], time: string, method: string, ingredients: string[], recipe_summary: string | undefined };
}

 const RecipeList: React.FC<RecipeListProps> = ({recipeObject}) => {

 const ingredients = recipeObject ? recipeObject.ingredients : undefined;
 const method = recipeObject ? recipeObject.method : undefined;
  
  return (
    <>
    <Grid 
    container 
    spacing={2} 
    sx={{padding:"0.5rem", backgroundColor: "#ef9a9a", justifyContent: "center"}}
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

        <Grid sx={{ maxWidth: "400px", padding: {xs: "1rem", md: "1.25rem"}, paddingBottom: "1rem" }}>
            <Typography 
                sx={{fontWeight: "700", fontSize: {xs: "1rem", md: "1.875rem"}, paddingBottom: {xs: "1rem", md: "1.5rem"}, paddingTop:{md:"1rem"} }}
                align="left">
                {recipeObject.name}
            </Typography>
            <Typography 
                sx={{fontWeight: "600", fontSize: {xs: "0.75rem", md: "1rem", lg: "1.25rem"}, paddingBottom: "1.5rem" }}
                >
                <AccessTimeFilledIcon sx={{ display:{xs:"none", sm: "inline"}, color:"#FFFFFF", verticalAlign:{ md: "middle", lg: "text-bottom"} }} /> {recipeObject.time} minutes
            </Typography>
            <Typography 
                sx={{fontSize: {xs: "0.75rem", md: "1.25rem"}, align: "left", paddingBottom: {xs: "1rem", md: "1.5rem"}}}
            >
                {recipeObject.recipe_summary}
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