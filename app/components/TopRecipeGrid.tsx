import Grid from '@mui/material/Grid2'
import RecipeCardSummary from './RecipeCardSummary'

const TopRecipeGrid = () => {
  return (
    <>
    <Grid 
        container 
        className="px-7 mx-5 md:mx-9 pt-10"
        spacing={{ xs: 2 }}
        >
          <Grid size={{xs: 12}}>
            <h1 className="font-extrabold text-lg md:text-3xl w-full text-center">See what everyone's raving about this month</h1>
          </Grid>
          <Grid size={{xs: 12}} >
            <p className="text-base md:text-xl w-full text-center mb-4">Here are our most popular recipes - tried, tested and utterly delicious!</p>
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