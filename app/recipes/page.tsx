import RecipeCarousel from "../components/RecipeCarousel";
import { headers } from "next/headers";

interface Recipe {
  id: number;
  name: string;
  image_path: string;
  dietary: string[];
  time: string;
  method: string;
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
        "method" in recipe
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
  const dietaryParams = searchParams?.dietary || "";
  const timeParams = searchParams?.time || "";

  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http"; // Use HTTPS in production
  const url = `${protocol}://${host}/api/recipes?dietary=${dietaryParams}&time=${timeParams}`;

  const data = await fetch(url); 

  const jsonResponse = (await data.json()) as unknown;

  let recipes: Recipe[] = [];
  let supportingText =
    "A selection of carefully selected meal ideas suited to your dietaries and time preferences";

  if (isRecipeArray(jsonResponse)) {
    recipes = jsonResponse;
  } else {
    // eslint-disable-next-line no-console
    console.error("Invalid recipe array");
    // try sanisiting
    // then throw
    supportingText =
      "Sorry, we have no recipes that match your dietary and time requirements :(";
  }

  return (
    <>
      <RecipeCarousel
        supportingText={supportingText}
        dietaryParams={dietaryParams}
        timeParams={timeParams}
        recipes={recipes}
      />
    </>
  );
};

export default Page;
