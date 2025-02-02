import { Card, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'
import React from 'react'
import CardListTemplate from './CardListTemplate';

interface RecipeListProps {
    recipeObject: {id: number, name: string, image_url: string, dietary: string[], time: string, method: string, ingredients: string[] | undefined };
}

 const RecipeList: React.FC<RecipeListProps> = ({recipeObject}) => {

 const ingredients = recipeObject ? recipeObject.ingredients : undefined;
 const method = recipeObject ? [recipeObject.method] : undefined;
  
  return (
    <>
    <Grid 
    container 
    spacing={2} 
    className='p-2 md:p-5 md:px-7 bg-gray-100 rounded-lg'
    justifyContent="center"
    >   
        <Grid sx={{ maxWidth: '400px', padding: '20px' }}>
            <Card sx={{ boxShadow: 'none', maxWidth: '400px', margin: '0 auto' }}> 
                <CardMedia
                    className="rounded-lg"
                    component="img"
                    image='/images/pasta.jpg'
                    alt="Paella dish" 
                    // sx={{ width: '100%', maxWidth: '400px' }}
                />
            </Card>
        </Grid>

        <Grid sx={{ maxWidth: '400px', padding: '20px' }}>
            <Typography 
                className="font-bold text-base md:text-3xl pb-7" 
                align="left">
                {recipeObject.name}
            </Typography>
            <Typography 
                className="text-xs md:text-xl font-bold pb-5" 
                align="left">
                Cooking Time: {recipeObject.time} minutes
            </Typography>
            <Typography 
                className="text-xs md:text-xl" 
                align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum quam sed semper dictum. Praesent tincidunt sapien nibh, non luctus eros molestie in. Suspendisse eu fringilla enim, eget tincidunt ipsum. Nulla hendrerit convallis cursus.
            </Typography>
        </Grid>
    </Grid>

    <Grid 
        container 
        spacing={2}
        justifyContent="center"
        sx={{ padding: '20px' }} 
        >
        <CardListTemplate recipeObject={ingredients}/>
        <CardListTemplate recipeObject={method}/>
    </Grid>
    </>
  )
}

export default RecipeList