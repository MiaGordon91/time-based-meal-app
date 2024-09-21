import Box from '@mui/material/Box';
import { Card, CardBody, IconButton, Typography } from '../MTailwind';
// import { ScheduleIcon } from '@material-ui/icons';

const timeSelector = () => {
  return (
        <Card className="mx-10 my-5 rounded-full h-48 bg-gray-100/50">
            <CardBody className="pt-8">
                <div className="flex flex-col items-center justify-center">
                <Typography className="text-2xl font-bold flex justify-center">
                    20 minutes  
                </Typography>
                <IconButton variant="outlined" className="rounded-full mt-8" size="lg">       
                Click </IconButton>
                </div>
            </CardBody>  
        </Card>        
  )
}

export default timeSelector