
import { Box } from '@mui/material';
import { Select, Option } from '../MTailwind';

const timeSelector = () => {
  return (
    <>
    <Box className="justify-center my-5">
        <Select 
          className="bg-white font-bold"
          color="purple"
          label="Select time frame" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Option>20 minutes</Option>
            <Option>30 minutes</Option>
            <Option>45 minutes</Option>
            <Option>I'm flexible</Option>
        </Select>
    </Box>
    </>     
  )
}

export default timeSelector