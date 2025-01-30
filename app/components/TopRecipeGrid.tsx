import Grid from '@mui/material/Grid2'
import RecipeCardSummary from './RecipeCardSummary'


interface TopRecipeGridProps {
  data: number[]
}

const TopRecipeGrid: React.FC<TopRecipeGridProps> = ({data}) => {
  return (
    <>
    <Grid 
        container 
        className="px-7 mx-5 md:mx-9 pt-2"
        spacing={{ xs: 2 }}
        >
          <Grid size={{xs: 12}}>
            <h1 className="font-extrabold text-lg md:text-3xl w-full text-center">See what everyone&apos;s raving about this month</h1>
          </Grid>
          <Grid size={{xs: 12}} >
            <p className="text-base md:text-xl w-full text-center mb-4">Here are our most popular recipes - tried, tested and utterly delicious!</p>
          </Grid>

          {data.map((x) => (
            <Grid size={{ xs:6, md: 3}} key={x}>
                <RecipeCardSummary key={x} data={null} value={x}/>
            </Grid>
          ))}
          
          
    </Grid>
    </>
  )
}

export default TopRecipeGrid