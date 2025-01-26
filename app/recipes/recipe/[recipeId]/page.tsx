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
  const selectedRecipe = placeholderRecipes.recipes.find(recipe => recipe.id == recipeId)

  // console.log(selectedRecipe);

  //Test array - ingredients will be stored in a dedicated database table
  selectedRecipe.ingredients = ['200g tomatoes', '1 tbsp olive oil', '2 red onions', '2 red peppers', '3 garlic cloves', '300g brown rice', '200g tomatoes', '1 tbsp olive oil', '2 red onions', '2 red peppers', '3 garlic cloves', '300g brown rice']
  
  return (
    <>
    <NavBar />
    <RecipeList children={selectedRecipe}/>
    <Footer />
    </>
  )


}

export default Page