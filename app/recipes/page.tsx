"use client"

import { Suspense } from 'react';
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import RecipeCarousel from '../components/RecipeCarousel'
import { useSearchParams } from "next/navigation";

const Page = () => {

  // retreive query params from query string
  const searchParams = useSearchParams();

  const params = searchParams.get('id');
  const queryParams = params ? params.split(",") : [];

  const dietaryParams = searchParams.get('dietary') || "none";
  const timeParams = searchParams.get('time') || "none";

  return (
    <>
    <NavBar />

    <Suspense>
      <RecipeCarousel recipeIds={queryParams} dietaryParams={dietaryParams} timeParams={timeParams}/>
    </Suspense>
    
    <Footer />
  </>
  )
}

export default Page