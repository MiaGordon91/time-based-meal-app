import { Box, FormControl, FormControlLabel, Checkbox, Typography, FormGroup } from "@mui/material";
import { pink } from "@mui/material/colors";
import useDietarySelectionHook from "../hooks/useDietarySelectionHook";

interface DietaryCheckBoxProps {
  onSelectionChange: (suitableRecipeIds: string[]) => void, //callback function to update state in parent
  checkBoxSize: "small" | "medium",  //literal-type - represents a specific value
  labelFontSiz: "0.85rem" | "1.25rem", //literal-type - represents a specific value
}

const DietaryCheckBox: React.FC<DietaryCheckBoxProps> = ({onSelectionChange, checkBoxSize, labelFontSiz}) => {

  const {dietaries, handleDietarySelection, isCheckboxDisabled} = useDietarySelectionHook(onSelectionChange);

  return (
    <>
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "1rem", backgroundColor: "#f5f5f5" }}>
      <FormControl>

        <Typography sx={{ fontSize: { xs:"0.875rem", sm: "1.125rem", lg:"1.5rem"}, fontWeight:600, textAlign: "center", padding: "1.5rem"}}>
            Select your preferred timeframe and dietary requirements below
        </Typography>
        
        <FormGroup
            sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}
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
          label={dietary.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
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