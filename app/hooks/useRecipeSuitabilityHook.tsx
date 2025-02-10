import { useState } from "react";
import placeholderRecipes from "../lib/placeholderRecipes.json";

const useRecipeSuitabilityHook = (data: [string[], string]) => {

    const [dietaries, time] = data;
    const [suitableRecipeIds, setSuitableRecipeIds] = useState<number[]>([]);
    const [errorMessage, setErrorMessage] = useState<string| null >(null);

    const handleClick = () => {

        if(time && dietaries.length > 0){ 

            const suitableRecipeIds: number[] = [];

            //convert object into array to iterate over
            const dietariesArray = Object.values(dietaries);

            placeholderRecipes.recipes.forEach((recipe) => {

            const recipeDietary = recipe["dietary"];    

            //iterates over array of each recipe to check if any value exists in the users dietaries
            if(recipeDietary.some(dietary => dietariesArray.includes(dietary) && recipe["time"] == time)){
                suitableRecipeIds.push(recipe["id"]);   
            }
        });  

        setSuitableRecipeIds(suitableRecipeIds);
        setErrorMessage(null);
        
      } else {
        setErrorMessage("Please select your dietary and time requirements");
      }
    };

    return {handleClick, suitableRecipeIds, errorMessage, dietaries, time};
};

export default useRecipeSuitabilityHook;