import { Box } from "@mui/material";
import { Button } from "../MTailwind"
import useRecipeSuitabilityHook from '../hooks/useRecipeSuitabilityHook';

interface FindButtonRecipeButtonProps {
  values: string, 
  data: [string[], string],
  onClickCallBack: (suitableRecipeIds: number[]) => void, 
}

const FindRecipeButton: React.FC<FindButtonRecipeButtonProps> = ({values, onClickCallBack, data}) => {

    const {handleClick} = useRecipeSuitabilityHook(onClickCallBack, data)

  return (
    <Box className='flex justify-center my-5'>
      <Button ripple={true} onClick={handleClick}>{values}</Button>
    </Box>
  );
}

export default FindRecipeButton

