import Grid from '@mui/material/Grid2'
import RecipeCardSummary from './RecipeCardSummary'

const TopRecipeGrid = () => {
  return (
    <>
    <Grid 
        container 
        className="mx-5 md:mx-6 pt-10"
        spacing={{ xs: 2 }}
        >
          <Grid size={{xs: 12}}>
            <h1 className="font-extrabold text-small md:text-base lg:text-lg w-full text-center">This Month's Popular Recipes!</h1>
          </Grid>
          <Grid size={{xs: 12}} >
            <p className="text-xs sm:text-base w-full text-center">See what everyone's raving about this month. These are our most popular recipes - tried, tested and utterly delicious!</p>
          </Grid>
          <Grid size={{ xs:6, md: 3}}>
            <RecipeCardSummary />
          </Grid>
          <Grid size={{ xs:6, md: 3}}>
            <RecipeCardSummary />
          </Grid>
          <Grid size={{ xs:6, md: 3}}>
            <RecipeCardSummary />
          </Grid>
          <Grid size={{ xs:6, md: 3}}>
            <RecipeCardSummary />
          </Grid>
    </Grid>
    </>
  )
}

export default TopRecipeGrid