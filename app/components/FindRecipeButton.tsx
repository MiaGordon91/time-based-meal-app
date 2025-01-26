'use client'

import { Box } from "@mui/material";
import { Button } from "../MTailwind"
import useRecipeSuitabilityHook from '../hooks/useRecipeSuitabilityHook';
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

interface FindButtonRecipeButtonProps {
  values: string, 
  data: [string[], string],
}

const FindRecipeButton: React.FC<FindButtonRecipeButtonProps> = ({values, data}) => {
  
  const router = useRouter()
  const searchParams = useSearchParams()

  const {handleClick, suitableRecipeIds} = useRecipeSuitabilityHook(data);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
    
      return params.toString();
    },
    [searchParams]
   )

  useEffect(() => {
    if(suitableRecipeIds.length > 0) {
      router.push(`/recipes?${createQueryString('id', suitableRecipeIds.join(','))}`
      )
      } else {
        router.push('/')
      }
  }, [suitableRecipeIds]);

  return (
    <Box className='flex justify-center my-5'>
      <Button ripple={true} onClick={handleClick}>{values}</Button>
    </Box>
  );
}

export default FindRecipeButton

