"use client";

import { useState, useEffect } from "react";
import RecipeCarousel from "./../components/RecipeCarousel";
import { useSearchParams } from "next/navigation";

const RecipePageClient = () => {

  // retreive query params from query string
  const searchParams = useSearchParams();

  const dietaryParams = searchParams.get("dietary") || "";
  const timeParams = searchParams.get("time") || "";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    const fetchRecipes = async () => {

      try {
        if(!searchParams) return; //Doesn't run if there's no searchParams

        const dietaryParams = searchParams.get("dietary") || "";
        const timeParams = searchParams.get("time") || "";

        const url = `/api/recipes?dietary=${dietaryParams}&time=${timeParams}`;
        console.log("Fetching from", url); //Debugging

        const response = await fetch(url);
        const data = await response.json();

        setRecipes(data);
    } catch(error) {
      console.log("error:", error);
    }
  };
    void fetchRecipes();
  }, [searchParams]);

  return (
    <>
      <RecipeCarousel 
        recipeIds={["1"]}
        dietaryParams={dietaryParams}
        timeParams={timeParams}
        recipes={recipes}
      />
    </>
  );
};

export default RecipePageClient;