import RecipeList from "@/app/components/RecipeList";
import postgres from "postgres";

const sql: postgres.Sql = postgres(process.env.DATABASE_URL as string);

interface Recipe {
  id: number;
  name: string;
  image_path: string;
  dietary: string[];
  time: string;
  method: string;
  ingredients: string[];
}

async function getRecipe(recipeId: number): Promise<Recipe[]> {

  let selectedRecipeId = 0;

  if (typeof(recipeId)=== "number") {
    selectedRecipeId = recipeId;
  } else {
    // eslint-disable-next-line no-console
    console.error("Invalid recipeId", recipeId);
  }

  const response: Recipe[] = await sql<Recipe[]>`SELECT id, name, image_path, dietary, time, method,ingredients FROM recipes WHERE id = ${selectedRecipeId}`;

  return response;
}

const Page =  async ({ params }: { params: { recipeId: string } }) => {
  
  //params props are passed to page - the dynamic segment will be the recipe name
  const recipeId = parseInt(params.recipeId);
  const selectedRecipe = await getRecipe(recipeId);

  return (
    <>
      <RecipeList recipeObject={selectedRecipe[0]} />
    </>
  );
};

export default Page;
