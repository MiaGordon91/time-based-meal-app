"use client";

import { Box } from "@mui/material";
import { Button } from "../MTailwind";
import useRecipeSuitabilityHook from "../hooks/useRecipeSuitabilityHook";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import Alert from "@mui/material/Alert";


interface FindButtonRecipeButtonProps {
  values: string, 
  data: [string[], string],
}

const FindRecipeButton: React.FC<FindButtonRecipeButtonProps> = ({values, data}) => {
  
  const router = useRouter();

  const {handleClick, suitableRecipeIds, errorMessage, dietaries, time} = useRecipeSuitabilityHook(data);

  //function takes an object of query parameters and sets k:v pairs to URLSearchParams
  const createQueryString = useCallback(
    (params: { [key: string]: string }) => {
      const searchParams = new URLSearchParams();
     
      Object.entries(params).forEach(([key, value]) => {
        searchParams.set(key, value);
      });
    
      return searchParams.toString();
    },
    []
   );

  useEffect(() => {
    if(suitableRecipeIds.length > 0) {
      router.push(
        `/recipes?${createQueryString({
          "id": suitableRecipeIds.join(","),
          "dietary": dietaries.toString(),
          "time": time.toString()
        })}`
      );
    } else {
      router.push("/");
    }
  }, [createQueryString, dietaries, router, suitableRecipeIds, time]);


  return (
    <Box className='relative flex justify-center items-center my-5'>
      <Button ripple={true} onClick={handleClick}>{values}</Button>
      { errorMessage && (
        // absolute positioning to avoid it shifting the button when alert is thrown
        <Box className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 mt-2 w-full" >
          <Alert className="text-red-500 mt-2" variant="outlined" severity="warning" >
            {errorMessage}
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default FindRecipeButton;

