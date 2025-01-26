import { Card, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'
import React from 'react'
import CardListTemplate from './CardListTemplate';

interface RecipeListProps {
    children: {id: number, name: string, image_url: string, dietary: string[], time: string, recipe: string, ingredients: string[]};
}

const RecipeList: React.FC<RecipeListProps> = ({children}) => {

const ingredients = children.ingredients;
const method = children.recipe;
  
  return (
    <>
    <Grid 
    container 
    spacing={2}
    xs={12} 
    className='p-2 md:p-5 md:px-7 bg-gray-100 rounded-lg'
    justifyContent="center"
    >   
        <Grid item xs={12} sm={6} sx={{ maxWidth: '400px', padding: '20px' }}>
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

        <Grid item xs={12} sm={6} sx={{ maxWidth: '400px', padding: '20px' }}>
            <Typography 
                className="font-bold text-base md:text-3xl pb-7" 
                align="left">
                {children.name}
            </Typography>
            <Typography 
                className="text-xs md:text-xl font-bold pb-5" 
                align="left">
                Cooking Time: {children.time} minutes
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
        xs={12} 
        justifyContent="center"
        sx={{ padding: '20px' }} 
        >
        <CardListTemplate children={ingredients}/>
        <CardListTemplate children={method}/>
    </Grid>
    </>
  )
}

export default RecipeList