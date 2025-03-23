import RecipeCarousel from "../../components/RecipeCarousel";
import { headers } from "next/headers";

interface Recipe {
  id: number;
  name: string;
  image_path: string;
  dietary: string[];
  time: string;
  method: string;
  ingredients: string[];
  recipe_summary: string;
}

const isRecipeArray = (recipes: unknown): recipes is Recipe[] => {
  if (
    Array.isArray(recipes) &&
    recipes.every(
      (recipe) =>
        typeof 
        recipe === "object" &&
        recipe !== null &&
        "id" in recipe &&
        "name" in recipe &&
        "image_path" in recipe &&
        "dietary" in recipe &&
        "time" in recipe &&
        "method" in recipe &&
        "ingredients" in recipe &&
        "recipe_summary" in recipe 
    )
  ) {
    return true;
  }

  // eslint-disable-next-line no-console
  console.error("Invalid user input array", recipes);
  return false;
};

const Page = async ({
  searchParams,
}: {
  searchParams: { input: string };
}) => {
  const inputParams = searchParams?.input || "";
  
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http"; // Use HTTPS in production
  const url = `${protocol}://${host}/api/searchRecipes?input=${inputParams}`;

  const data = await fetch(url, {cache: "force-cache"}); 

  const jsonResponse = (await data.json()) as unknown;

  let recipes: Recipe[] = [];
  let supportingText = ""; 

  if (isRecipeArray(jsonResponse)) {
    recipes = jsonResponse;

    const recipeCount = recipes.length;
    
    supportingText = recipes.length === 1 ? "Showing 1 result" : "Showing " + recipeCount + " results";
  } else {
    // eslint-disable-next-line no-console
    console.error("Invalid user input array");

    supportingText =
      "Sorry, we have no recipes that match your search :(";
  }

  return (
    <>
      <RecipeCarousel
        supportingText={supportingText}
        dietaryParams={null}
        timeParams={null}
        recipes={recipes}
      />
    </>
  );
};

export default Page;
