import placeholderRecipes from "../lib/placeholderRecipes.json"

const useRecipeSuitabilityHook = (
    onClickCallBack: (suitableRecipeIds: number[]) => void, 
    data: [string[], string]) => {

    const [dietaries, time] = data;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        if(dietaries && time){ 

            const suitableRecipeIds: number[] = [];

            //convert object into array for iteration
            const dietariesArray = Object.values(dietaries);

            placeholderRecipes.forEach((recipe) => {

            const recipeDietary = recipe["dietary"];    

            //iterates over array of each recipe to check if any value exists in the users dietaries
            if(recipeDietary.some(dietary => dietariesArray.includes(dietary) && recipe["time"] == time)){
                suitableRecipeIds.push(recipe["id"]);   
            }
        })  
            
        onClickCallBack(suitableRecipeIds);

        return suitableRecipeIds;
        
      }
    }

    return {handleClick};
}

export default useRecipeSuitabilityHook;