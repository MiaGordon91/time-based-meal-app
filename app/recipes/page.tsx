import RecipeCarousel from "../components/RecipeCarousel";
import { headers } from "next/headers";

interface Recipe {
  id: number;
  name: string;
  image_url: string;
  dietary: string[];
  time: string;
  method: string;
}

const Page = async ({searchParams}: {searchParams: {dietary: string, time: string} }) => {

  const dietaryParams = searchParams?.dietary || "";
  const timeParams = searchParams?.time || "";


  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http"; // Use HTTPS in production
  const url = `${protocol}://${host}/api/recipes?dietary=${dietaryParams}&time=${timeParams}`;
  
  const data = await fetch(url, { cache: "no-store" }); 

  const recipes: Recipe[] = (await data.json() as Recipe[]);

  return (
    <>    
    <RecipeCarousel 
        dietaryParams={dietaryParams}
        timeParams={timeParams}
        recipes={recipes}
      />
    </>
  );
};

export default Page;
