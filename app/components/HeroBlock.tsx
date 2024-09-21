import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const HeroBlock = () => {
  return (
    <>
    <Box className="mt-4 p-7 mx-auto rounded-lg border-[1.5px] bg-pink-100 w-full text-center">
        <Typography className="text-center" variant="h4">
          We're here to take the pain out of deciding what to cook. 
        </Typography>
        <Typography className="pt-2" variant="h5">
          Select the time options below and let us find tonight's dinner for you.
        </Typography>
    </Box>
    </>
  )
}

export default HeroBlock