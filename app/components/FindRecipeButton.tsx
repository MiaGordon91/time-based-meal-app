import { Box } from "@mui/material";
import { Button } from "../MTailwind"
import placeholderRecipes from "../lib/placeholderRecipes.json"

interface FindButtonRecipeButtonProps {
  values: string, 
  data: [string[], string],
  onClickCallBack: (suitableRecipeIds: number[]) => void, 
}

const FindRecipeButton: React.FC<FindButtonRecipeButtonProps> = ({values, onClickCallBack, data}) => {

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
      
    }
  }

  
  return (
    <Box className='flex justify-center my-5'>
      <Button ripple={true} onClick={handleClick}>{values}</Button>
    </Box>
  );
}

export default FindRecipeButton

