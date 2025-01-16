import { useState } from "react";
import placeholderRecipes from "../lib/placeholderRecipes.json"

const useRecipeSuitabilityHook = (data: [string[], string]) => {

    const [dietaries, time] = data;
    const [suitableRecipeIds, setSuitableRecipeIds] = useState<number[]>([])

    const handleClick = () => {

        if(dietaries && time){ 

            const suitableRecipeIds: number[] = [];

            //convert object into array to iterate over
            const dietariesArray = Object.values(dietaries);

            placeholderRecipes.forEach((recipe) => {

            const recipeDietary = recipe["dietary"];    

            //iterates over array of each recipe to check if any value exists in the users dietaries
            if(recipeDietary.some(dietary => dietariesArray.includes(dietary) && recipe["time"] == time)){
                suitableRecipeIds.push(recipe["id"]);   
            }
        })  

        setSuitableRecipeIds(suitableRecipeIds);
        
      }
    }

    return {handleClick, suitableRecipeIds};
}

export default useRecipeSuitabilityHook;