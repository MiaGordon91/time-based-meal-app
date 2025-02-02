
import { Box } from '@mui/material';
import { Select, Option } from '../MTailwind';
import { useState } from 'react';

interface TimeSelectorInterface {
  values: string[][], 
  onValueChange: (setHandleTime: string | undefined) => void
}

const TimeSelector: React.FC<TimeSelectorInterface> = ({values, onValueChange}) => {

  const [time, setTime] = useState<string | undefined>("");

  //update the state and notify the parent component by invoking the onValueChange callback 

  //MTailWind Select provides the selected value straight to the OnChange callback
  //so event.target.value isnt required
  const handleChange = (selectedTime: string | undefined) => {

    setTime(selectedTime);

    if(onValueChange){
      onValueChange(selectedTime);
    }
  };

  
  return (
    <>
    <Box className="justify-center my-5">
        <Select 
          className="bg-white font-bold"
          color="purple"
          label="Select time frame" 
          value={time}
          name={time}
          onChange={handleChange}
          >
          {values.map(([value, text]) => (
            <Option key={value} value={value}>
              {text}
            </Option>
          ))}
        </Select>
    </Box>
    </>     
  )
}

export default TimeSelector