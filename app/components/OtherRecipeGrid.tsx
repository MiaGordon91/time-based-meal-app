import Grid from "@mui/material/Grid2";
import RecipeCardSummary from "./RecipeCardSummary";
import { Box, Typography } from "@mui/material";
import postgres from "postgres";

const sql: postgres.Sql = postgres(process.env.DATABASE_URL as string);

interface lowerRecipeGrid {
  dietaryParams: string;
  time: string;
  recipeGrid?: string;
  recipeIds: number[];
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
  async function getData(dietaryParams: string, recipeIds: number[]): Promise<Recipe[]> {

  // sql injects dietary array to find other recipes and injects fetched recipe ids to exclude from the grid. 
  const dietaryOptions = ["lactoseIntolerant", "vegetarian", "vegan", "glutenFree", "none"] as const;

  const dietaryArray: string[] = dietaryParams?.split(",").filter((dietary: string) => 
        dietaryOptions.includes(dietary as typeof dietaryOptions[number])
    ) || ["none"] as string[];

  
  if(!dietaryArray.includes("none")){
    return await sql<Recipe[]>`SELECT id, name, image_path, dietary, time, method, recipe_summary FROM recipes WHERE dietary && ${dietaryArray} AND id != ALL(${recipeIds}) LIMIT 3;`;
  } else {
    return await sql<Recipe[]>`SELECT id, name, image_path, dietary, time, method, recipe_summary FROM recipes WHERE id != ALL(${recipeIds}) ORDER BY RANDOM() LIMIT 3;`;
  }
}

const OtherRecipeGrid: React.FC<lowerRecipeGrid>= async ({dietaryParams, recipeIds}) => {

  const recipes = await getData(dietaryParams, recipeIds);

  let mdSize = 0;

  if(recipes){
    switch((Object.keys(recipes).length) || recipes.length) {
      case 4: 
        mdSize = 3;
        break;
      case 3:
        mdSize = 4;
        break;
      case 2:
        mdSize = 6;
        break;
      case 1:
        mdSize = 12;
    }
  }

  return (
    <>
     <Grid 
        container 
        spacing={2}
        sx={{justifyContent:"center", paddingTop: "2rem 2rem", paddingInline: "3rem"}}
        >
          <Grid size={{xs: 12}}>

            <Box sx={{ border: "2px dashed", padding: "1rem", margin:"2rem 2rem",backgroundColor:"#FFFFFF"}}>
                <Typography
                    sx={{
                        fontWeight: 800,
                        fontSize: {xs: "1rem", md: "1.5rem"},
                        textAlign: "center"
                    }}
                    >
                    Would you consider these recipes?
                </Typography>

                <Typography
                sx={{ display: { xs: "none", sm: "block" }, fontSize: {xs: "1rem", md: "1.25rem"}, marginTop: "1rem", textAlign: "center", marginBottom: "1rem" }}
                >
                They don&apos;t quite match your time needs, but all our recipes can be adapted - give it a try!
                </Typography>
            </Box>
          </Grid>

          {recipes.map((x, index) => (
            <Grid size={{ xs:6, md: mdSize}} sx={{maxWidth: "400px"}} key={x.id}>
              <RecipeCardSummary key={index} data={x}/>
            </Grid>
          ))}        
     </Grid>
    </>
  );
};

export default OtherRecipeGrid;