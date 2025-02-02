"use client"

import { Suspense } from 'react';
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import RecipeCarousel from '../components/RecipeCarousel'
import { useSearchParams } from "next/navigation";

//temp fix to resolve missing-suspense-with-csr-bailout in prod build
function RecipeCarouselFallback() {
    return <>test</>
}

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

    <Suspense fallback={<RecipeCarouselFallback />}>
      <RecipeCarousel recipeIds={queryParams} dietaryParams={dietaryParams} timeParams={timeParams}/>
    </Suspense>

    <Footer />
  </>
  )
}

export default Page