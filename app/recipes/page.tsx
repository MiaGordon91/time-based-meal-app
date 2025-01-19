"use client"
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import RecipeCarousel from '../components/RecipeCarousel'
import { useSearchParams } from "next/navigation";

const Page = () => {

  // retreive id's from query string or hard code
  const searchParams = useSearchParams();
  const params = searchParams.get('id');
  const queryParams = params ? params.split(",") : null;
  
  return (
    <>
    <NavBar />
    <RecipeCarousel data={queryParams}/>
    <Footer />
    </>
  )
}

export default Page