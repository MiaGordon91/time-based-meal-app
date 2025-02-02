import React, { useState } from 'react'
import TimeSelector from './TimeSelector'
import FindRecipeButton from './FindRecipeButton'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import DietaryCheckBox from './DietaryCheckBox'

const TimeGrid = () => {

  const theme = useTheme();
  
  // Media queries for different breakpoints
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // sm and below
  
  // Determine the size based on screen width
  const checkBoxSize = isSmallScreen ? 'small' :'medium';
  const labelFontSize = isSmallScreen ? '0.75rem':'1.25rem';

  const timeOptions = [
    ['20', '20 minutes'],
    ['30', '30 minutes'],
    ['45', '45 minutes'],
    ['60', '60 minutes'],
    ['0', 'I\'m flexible']
  ];

  //update state in parent component
  const [handleDietaries, setHandleDietaries] = useState<string[]>([]);
  const [handleTime, setHandleTime] = useState<string | undefined >("");

  const handleDietarySelection = (selectedItems: string[]) => {
    setHandleDietaries(selectedItems);
  }

  
  return (
    <>
    <Box className="flex flex-col justify-center gap-x-4 sm:mb-7 md:mt-6 bg-gray-100">
      <DietaryCheckBox 
        onSelectionChange={handleDietarySelection} 
        checkBoxSize={checkBoxSize}
        labelFontSiz={labelFontSize}
      />

      <Box className="justify-center sm:flex sm:flex-row sm:gap-x-2 md:mb-8">
        <TimeSelector 
          values={timeOptions}
          onValueChange={setHandleTime}
        />

        <FindRecipeButton 
          values={'Find Me Recipes'}
          data={[handleDietaries, handleTime!]}
        />
      </Box>

    </Box>   
    </>
  )
}

export default TimeGrid

