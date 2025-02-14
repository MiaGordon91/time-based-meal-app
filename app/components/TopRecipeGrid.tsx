import Grid from "@mui/material/Grid2";
import RecipeCardSummary from "./RecipeCardSummary";
import { Typography } from "@mui/material";
import postgres from "postgres";

const sql: postgres.Sql = postgres(process.env.DATABASE_URL);

//TS interface representing returned data structure
interface Recipe {
  id: number;
  name: string;
  image_url: string;
  dietary: string[];
  time: string;
  method: string;
}

//explicitly return functions return value => Promise returning a Recipe interface
async function getData(): Promise<Recipe[]> {
  
  const response: Recipe[] = await sql<Recipe[]>`SELECT id, name, image_url, dietary, time, method FROM recipes WHERE id IN (1, 2, 3, 4)`;

  return response;
}

const TopRecipeGrid = async () => {

  const recipes = await getData();

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

          {recipes.map((x) => (
            <Grid size={{ xs:6, md: 3}} key={x.id}>
              <RecipeCardSummary key={x.id} recipe={x}/>
            </Grid>
          ))}        
     </Grid>
    </>
  );
};

export default TopRecipeGrid;