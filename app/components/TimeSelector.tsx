import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

interface TimeSelectorInterface {
  values: string[][], 
  onValueChange: (setHandleTime: string | undefined) => void
}

const TimeSelector: React.FC<TimeSelectorInterface> = ({values, onValueChange}) => {

  const [time, setTime] = useState<string | undefined>("");

  //update the state and notify the parent component by invoking the onValueChange callback 
  const handleChange = (event: SelectChangeEvent) => {

    setTime(event.target.value);

    if(onValueChange){
      onValueChange(event.target.value);
    }
  };

  return (
    <>
    <Box sx={{ minWidth: 130, justifyContent: "center", marginTop: "1.25rem", marginBottom: "1.25rem", backgroundColor: "#FFFFFF",  marginLeft: {xs: 10, sm:0}, marginRight: {xs: 10, sm:0}}}>
      <FormControl fullWidth size="small" sx={{ color:"#000000"}}>
          <InputLabel id="demo-simple-select-label" >Select Time</InputLabel>
            <Select
              labelId="time-select-label"
              id="time-select"
              value={time}
              label="Select Time"
              onChange={handleChange}
              autoWidth
            >
              {values.map(([value, text]) => (
                <MenuItem key={value} value={value}>                   
                  {text}             
                </MenuItem>
              ))}
            </Select>
      </FormControl>
    </Box>
    </>     
  );
};

export default TimeSelector;