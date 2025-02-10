import Grid from "@mui/material/Grid2";
import RecipeCardSummary from "./RecipeCardSummary";
import { Typography } from "@mui/material";


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
            <Typography
                className="font-extrabold text-lg md:text-3xl w-full text-center"
                >
                See what everyone&apos;s raving about this month
            </Typography>
          </Grid>

          <Grid size={{xs: 12}} >
            <Typography
              sx={{ display: { xs: "none", sm: "block" }}}
              className="text-base md:text-xl w-full text-center mb-4"
              >
              Here are our most popular recipes - tried, tested and utterly delicious!
            </Typography>
          </Grid>

          {data.map((x) => (
            <Grid size={{ xs:6, md: 3}} key={x}>
              <RecipeCardSummary key={x} data={null} value={x}/>
            </Grid>
          ))}        
     </Grid>
    </>
  );
};

export default TopRecipeGrid;