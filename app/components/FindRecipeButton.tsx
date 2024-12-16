import { Box } from "@mui/material";
import { Button } from "../MTailwind"

const FindRecipeButton = () => {
  return (
    <Box className='flex justify-center my-5'>
      <Button ripple={true} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Find Me Recipes</Button>
    </Box>
  );
}

export default FindRecipeButton