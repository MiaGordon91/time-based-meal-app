import { Box, FormControl, FormControlLabel, Checkbox, Typography, FormGroup, capitalize } from "@mui/material";
import { pink } from "@mui/material/colors";
import useDietarySelectionHook from "../hooks/useDietarySelectionHook";

interface DietaryCheckBoxProps {
  onSelectionChange: (suitableRecipeIds: string[]) => void, //callback function to update state in parent
  checkBoxSize: "small" | "medium",  //literal-type - represents a specific value
  labelFontSiz: "0.75rem" | "1.25rem", //literal-type - represents a specific value
}

const DietaryCheckBox: React.FC<DietaryCheckBoxProps> = ({onSelectionChange, checkBoxSize, labelFontSiz}) => {

  const {dietaries, handleDietarySelection, isCheckboxDisabled} = useDietarySelectionHook(onSelectionChange);

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
          {Object.entries(dietaries).map(([dietary, checked]) => (
            <FormControlLabel value={dietary} key={dietary} control={
              <Checkbox 
                size={checkBoxSize}
                checked={checked}
                onChange={handleDietarySelection}
                disabled={isCheckboxDisabled(dietary)}
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                  color: pink[600],
                  },
                }}
            />
          }
          label={capitalize(`${dietary}`)}
            sx={{
              "& .MuiFormControlLabel-label": { fontSize: labelFontSiz },
            }}        
          />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
    </>
  );
};

export default DietaryCheckBox;