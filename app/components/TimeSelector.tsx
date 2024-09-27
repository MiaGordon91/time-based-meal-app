
import { Select, Option } from '../MTailwind';
// import { ScheduleIcon } from '@material-ui/icons';

const timeSelector = () => {
  return (
    <>
    <div className="flex w-60 my-5">
        <Select 
        className="bg-white font-bold"
        color="purple" 
        label="Select time frame"
        >
            <Option>20 minutes</Option>
            <Option>30 minutes</Option>
            <Option>45 minutes</Option>
            <Option>I'm flexible</Option>
        </Select>
    </div>
    </>     
  )
}

export default timeSelector