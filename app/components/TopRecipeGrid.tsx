import Grid from "@mui/material/Grid2";
import RecipeCardSummary from "./RecipeCardSummary";
import { Typography } from "@mui/material";
import postgres from "postgres";

const sql: postgres.Sql = postgres(process.env.DATABASE_URL as string);

interface lowerRecipeGrid {
  recipeGrid?: string;
  recipeId?: number;
} 

//TS interface representing returned data structure
interface Recipe {
  id: number;
  name: string;
  image_path: string;
  dietary: string[];
  time: string;
  method: string[];
  recipe_summary: string;
}

//explicitly return functions return value => Promise returning a Recipe interface
async function getData(): Promise<Recipe[]> {
  
  const response: Recipe[] = await sql<Recipe[]>`SELECT id, name, image_path, dietary, time, method, recipe_summary FROM recipes WHERE id IN (1, 2, 3, 4)`;

  return response;
}

const TopRecipeGrid: React.FC<lowerRecipeGrid> = async () => {

  const recipes = await getData();

  return (
    <>
     <Grid 
        container 
        spacing={{ xs: 2 }}
        sx={{paddingBottom: "2rem", marginBottom:"2rem", paddingInline: "1.75rem"}}
        >
          <Grid size={{xs: 12}}>

            <Typography
                sx={{fontWeight: "800", fontSize: {xs: "1.125rem", md: "1.875rem"}, width:"100%", textAlign: "center", paddingTop: "2rem" }}
                >
                See what everyone&apos;s raving about this month...
            </Typography>
          </Grid>
          <Grid size={{xs: 12}} >
            <Typography
              sx={{ display: { xs: "none", sm: "block" }, fontSize: {xs: "1rem", md: "1.25rem"}, width:"100%", textAlign: "center", marginBottom: "1rem"}}
              >
              Here&apos;s our most popular recipes - tried, tested and utterly delicious!
            </Typography>
          </Grid>

          {recipes.map((x, index) => (
            <Grid size={{ xs:6, md: 3}} key={x.id}>
              <RecipeCardSummary key={index} data={x}/>
            </Grid>
          ))}        
     </Grid>
    </>
  );
};

export default TopRecipeGrid;