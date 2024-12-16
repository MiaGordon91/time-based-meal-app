import React from 'react'
import TimeSelector from './TimeSelector'
import FindRecipeButton from './FindRecipeButton'
import DietaryRadioButtons from './DietaryRadioButtons'
import { Box } from '@mui/material'

const TimeGrid = () => {
  return (
    <>
    <Box className="flex flex-col justify-center gap-x-4 sm:mb-7 md:mt-6 bg-gray-100">
      <DietaryRadioButtons />

      <Box className="justify-center sm:flex sm:flex-row sm:gap-x-2 md:mb-8">
        <TimeSelector />
        <FindRecipeButton />
      </Box>

    </Box>   
    </>
  )
}

export default TimeGrid
