import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography, useMediaQuery, useTheme } from '@mui/material'
import TimeGrid from './TimeGrid'
import { pink } from '@mui/material/colors'

const DietaryRadioButtons = () => {

  const theme = useTheme();

  // Media queries for different breakpoints
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // sm and below

  // Determine the size based on screen width
  const radioSize = isSmallScreen ? 'small' :'medium';
  const labelFontSize = isSmallScreen ? '0.75rem':'1.25rem';

  return (
    <Box className="flex flex-col items-center pt-4 bg-gray-100">
      <FormControl>
        <Typography className="text-sm md:text-lg lg:text-2xl text-center px-6 pb-2 md:py-6">
            Select your preferred time frame and any dietary requirements below and let us find tonight's dinner for you.
        </Typography>
        
        <RadioGroup
            className="flex flex-row justify-center items-center"
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        >
          <FormControlLabel value="Vegan" control={
            <Radio 
              size={radioSize}
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
              '& .MuiFormControlLabel-label': { fontSize: labelFontSize },
            }}
             
          />
          <FormControlLabel value="Vegetarian" control={
            <Radio 
              size={radioSize}
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                color: pink[600],
                },
              }}
            />} 
            label="Vegetarian" 
            sx={{
              '& .MuiFormControlLabel-label': { fontSize: labelFontSize },
            }}/>
          <FormControlLabel value="Gluten-Free" control={
            <Radio
              size={radioSize} 
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                color: pink[600],
                },
              }}
            />} 
            label="Gluten-Free" 
            sx={{
              '& .MuiFormControlLabel-label': { fontSize: labelFontSize },
            }}/>
          <FormControlLabel value="Lactose-intolerant" control={
            <Radio 
              size={radioSize}
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                color: pink[600],
                },
              }}
            />} 
            label="Lactose-intolerant"
            sx={{
              '& .MuiFormControlLabel-label': { fontSize: labelFontSize },
            }}/>
          <FormControlLabel value="None" control={
              <Radio 
                size={radioSize}
                sx={{
                  color: pink[800],
                  '&.Mui-checked': {
                  color: pink[600],
                  },
                }}
              />} 
              label="None"
              sx={{
                '& .MuiFormControlLabel-label': { fontSize: labelFontSize },
              }}/>

        </RadioGroup>
      </FormControl>
      
      <TimeGrid />
    </Box>
  )
}

export default DietaryRadioButtons