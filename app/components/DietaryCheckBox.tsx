import { Box, FormControl, FormControlLabel, Checkbox, Typography, useMediaQuery, useTheme, FormGroup } from '@mui/material'
import { pink } from '@mui/material/colors'
import { useState } from 'react';

interface DietaryCheckBoxProps {
  onSelectionChange: (suitableRecipeIds: string[]) => void, //callback function to update state in parent
  checkBoxSize: 'small' | 'medium', 
  labelFontSiz: '0.75rem' | '1.25rem',
}

const DietaryCheckBox: React.FC<DietaryCheckBoxProps> = ({onSelectionChange, checkBoxSize, labelFontSiz}) => {

  // handle checkbox groups 
  // define dietaries object which matches the value of each checkbox below 
  const [dietaries, setDietaries] = useState({
    vegan: false, 
    vegetarian: false, 
    glutenFree: false, 
    lactoseIntolerant: false, 
    none: false
  });

  const { vegan, vegetarian, glutenFree, lactoseIntolerant, none } = dietaries;

  const handleDietarySelection = (event: { target: { value: string; checked: boolean; }; }) => {
      
    //Access the value and checked property directly to update and manage the state
    const {value, checked} = event.target;

    //Update the dietary selection state
    setDietaries((prevDietaries) => ({

        ...prevDietaries, 
        [value]: checked,
      
    }));

    // call the parent component callback and pass update dietary state
    if(onSelectionChange) {

      // loop over key of dietary object, if the key === the value of the 
      // selected checkbox then update as checked - its a way to filter the selected items

      // This creates a new state object with each change of behaviour (immutability) instead
      // of mutating existing one - setting checked properly allows dynamic behaviour 
      const selectedItems = Object.keys(dietaries).filter(
        (key) => key === value ? checked : dietaries[key as keyof typeof dietaries]); // required to tell TS that the key also exists in the dietaries object
      
        //send updated items to callback as an array
        onSelectionChange(selectedItems);
    }
  };
  

  return (
    <>
    <Box className="flex flex-col items-center pt-4 bg-gray-100">
      <FormControl>
        <Typography className="text-sm md:text-lg lg:text-2xl text-center px-6 pb-2 md:py-6">
            Select your preferred time frame and dietary requirements below and let us find tonights dinner for you.
        </Typography>
        
        <FormGroup
            className="flex flex-row justify-center items-center"
            aria-labelledby="demo-row-radio-buttons-group-label"
        >
          <FormControlLabel value="vegan" control={
            <Checkbox 
              checked={vegan}
              onChange={handleDietarySelection}
              size={checkBoxSize}
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                color: pink[600],
                },
              }}
            />
          } 
            label="Vegan" 
            sx={{
              '& .MuiFormControlLabel-label': { fontSize: labelFontSiz },
            }}        
          />
          <FormControlLabel value="vegetarian" control={
            <Checkbox 
              checked={vegetarian}
              onChange={handleDietarySelection}
              size={checkBoxSize}
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                color: pink[600],
                },
              }}
            />} 
            label="Vegetarian" 
            sx={{
              '& .MuiFormControlLabel-label': { fontSize: labelFontSiz },
            }}
            />
          <FormControlLabel value="glutenFree" control={
            <Checkbox
              checked={glutenFree}
              onChange={handleDietarySelection}
              size={checkBoxSize} 
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                color: pink[600],
                },
              }}
            />} 
            label="Gluten-Free" 
            sx={{
              '& .MuiFormControlLabel-label': { fontSize: labelFontSiz },
            }}/>
          <FormControlLabel value="lactoseIntolerant" control={
            <Checkbox 
              checked={lactoseIntolerant}
              onChange={handleDietarySelection}
              size={checkBoxSize}
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                color: pink[600],
                },
              }}
            />} 
            label="Lactose-intolerant"
            sx={{
              '& .MuiFormControlLabel-label': { fontSize: labelFontSiz },
            }}/>
          <FormControlLabel value="none" control={
              <Checkbox 
                checked={none}
                onChange={handleDietarySelection}
                size={checkBoxSize}
                sx={{
                  color: pink[800],
                  '&.Mui-checked': {
                  color: pink[600],
                  },
                }}
              />} 
              label="None"
              sx={{
                '& .MuiFormControlLabel-label': { fontSize: labelFontSiz },
              }}/>

        </FormGroup>
      </FormControl>
    </Box>
    </>
  )

}

export default DietaryCheckBox