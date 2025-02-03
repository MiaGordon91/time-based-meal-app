"use client";

import RecipeCarousel from "./../components/RecipeCarousel";
import { useSearchParams } from "next/navigation";
import Footer from "./../components/Footer";
import NavBar from "./../components/NavBar";

const RecipePageClient = () => {
  // retreive query params from query string
  const searchParams = useSearchParams();

  const params = searchParams.get("id");
  const queryParams = params ? params.split(",") : [];

  const dietaryParams = searchParams.get("dietary") || "none";
  const timeParams = searchParams.get("time") || "none";

  return (
    <>
    <NavBar />
        <RecipeCarousel 
        recipeIds={queryParams}
        dietaryParams={dietaryParams}
        timeParams={timeParams}
        />
    <Footer />
    </>
  )
}

export default RecipePageClient