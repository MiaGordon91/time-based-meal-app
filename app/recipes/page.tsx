import RecipeCarousel from "../components/RecipeCarousel";
import { headers } from "next/headers";
import TopRecipeGrid from "../components/TopRecipeGrid";
import Divider from "@mui/material/Divider";
import OtherRecipeGrid from "../components/OtherRecipeGrid";

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
    recipes.length > 0 &&
    recipes.every(
      (recipe) =>
        typeof 
        recipe === "object" &&
        recipe != null &&
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
  console.error("Invalid recipe array", recipes);
  return false;
};

const Page = async ({
  searchParams,
}: {
  searchParams: { dietary: string; time: string };
}) => {
  let dietaryParams = searchParams?.dietary || "";
  const timeParams = searchParams?.time || "";

  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http"; // Use HTTPS in production
  const url = `${protocol}://${host}/api/recipes?dietary=${dietaryParams}&time=${timeParams}`;

  const data = await fetch(url);

  const jsonResponse = (await data.json()) as unknown;

  let recipes: Recipe[] = [];
  let supportingText = "";

  if (isRecipeArray(jsonResponse)) {
    recipes = jsonResponse;
  
    supportingText = "Here's a selection of carefully selected meal ideas suited to your dietary and time requirements";
  
  } else {
    // eslint-disable-next-line no-console
    console.error("Invalid recipe array");
 
    supportingText =  
      "Sorry, we're unable to find recipes that match your dietary and time requirements.";
  }

  //uppercase first letter of each dietary
  dietaryParams = dietaryParams.split(",").map(item => item.substring(0,1).toUpperCase()+item.substring(1)).join(", ");

  if(recipes.length > 0) {
    return (
      <>
        <RecipeCarousel
          supportingText={supportingText}
          dietaryParams={dietaryParams}
          timeParams={timeParams}
          recipes={recipes}
        />
         <OtherRecipeGrid 
            dietary={dietaryParams.toLowerCase()}
            time={timeParams}
            />
      </>
    );
    } else {
      return (
        <>
        <RecipeCarousel
        supportingText={supportingText}
        dietaryParams={dietaryParams}
        timeParams={timeParams}
        />
        <Divider sx={{paddingTop: "2rem"}} variant="middle" />
        <TopRecipeGrid />
      </>
      );
    }
};

export default Page;
