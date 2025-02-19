"use client";

import { useState, useEffect } from "react";
import RecipeCarousel from "./../components/RecipeCarousel";
import { useSearchParams } from "next/navigation";

interface Recipe {
  id: number;
  name: string;
  image_url: string;
  dietary: string[];
  time: string;
  method: string;
}

const RecipePageClient = () => {

  // retreive query params from query string
  const searchParams = useSearchParams();

  const dietaryParams = searchParams.get("dietary") || "";
  const timeParams = searchParams.get("time") || "";

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        //API Request URL with params
        const url = `/api/recipes?dietary=${dietaryParams}&time=${timeParams}`;
        console.log("Fetching from", url); //Debugging

        const response = await fetch(url);
        if(!response.ok) throw new Error("Failed to fetch");

        const data: Recipe[] = (await response.json() as Recipe[]);

        setRecipes(data);
    } catch(error) {
      console.log("error:", error);
    }
  };
    void fetchRecipes();
    //[dietaryParams, timeParams] is the dependency array, fetchRecipes() is called
    //each time this changes. UseEffect is listening for changes
  }, [dietaryParams, timeParams]);

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

export default RecipePageClient;