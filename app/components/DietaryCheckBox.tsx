import { Box, FormControl, FormControlLabel, Checkbox, Typography, useMediaQuery, useTheme, FormGroup } from '@mui/material'
import { pink } from '@mui/material/colors'
import { useState } from 'react';

const DietaryCheckBox = ({onSelectionChange, checkBoxSize, labelFontSiz}: {onSelectionChange: any, checkBoxSize: any, labelFontSiz: any}) => {


  // handle checkbox groups 
  // define dietaries object which matches the value of each checkbox below 
  const [dietaries, setDietaries] = useState({
    Vegan: false, 
    Vegetarian: false, 
    GlutenFree: false, 
    LactoseIntolerant: false, 
    None: false
  });

  const { Vegan, Vegetarian, GlutenFree, LactoseIntolerant, None } = dietaries;

  const handleDietarySelection = (event: { target: { value: any; checked: any; }; }) => {
      
      //Access the value and checked property directly to update and manage the state
      const {value, checked} = event.target;

      //Update the dietary selection state
      setDietaries((prevDietaries) => ({

          ...prevDietaries, 
          [value]: checked,
      
    }));

    // call the parent component callback and pass update dietary state
    if(onSelectionChange) {

      // loop over key of dietary object, if the key === the value of the checked 
      // selected checkbox then update as checked - its a way to filter the selected items

      // This creates a new state object with each change of behaviour instead
      // of mutating existing one
      const selectedItems = Object.keys(dietaries).filter(
        (key) => key === value ? checked : dietaries[key]);
      
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
          <FormControlLabel value="Vegan" control={
            <Checkbox 
              checked={Vegan}
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
          <FormControlLabel value="Vegetarian" control={
            <Checkbox 
              checked={Vegetarian}
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
          <FormControlLabel value="GlutenFree" control={
            <Checkbox
              checked={GlutenFree}
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
          <FormControlLabel value="LactoseIntolerant" control={
            <Checkbox 
              checked={LactoseIntolerant}
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
          <FormControlLabel value="None" control={
              <Checkbox 
                checked={None}
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