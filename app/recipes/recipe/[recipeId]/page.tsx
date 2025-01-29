'use client'

import Footer from '../../../components/Footer'
import NavBar from '../../../components/NavBar'
import RecipeList from '@/app/components/RecipeList';
import placeholderRecipes from "../../../lib/placeholderRecipes.json";


const Page = ({params}: {
  params: {recipeId: string}
}) => {

  //params props are passed to page - the dynamic segment will be the recipe name

  //Need to update once connected to a database 
  const recipeId = parseInt(params.recipeId)
  let selectedRecipe = placeholderRecipes.recipes.find(recipe => recipe.id == recipeId)

  return (
    <>
    <NavBar />
    <RecipeList recipeObject={selectedRecipe}/>
    <Footer />
    </>
  )


}

export default Page