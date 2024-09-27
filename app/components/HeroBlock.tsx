"use client"

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import TimeGrid from './TimeGrid'

const HeroBlock = () => {
  return (
    <>
    <Box className="p-4 sm:p-8 mx-auto border-[1.5px] bg-pink-100 w-full text-center">
        <Typography className="text-small md:text-2xl lg:text-3xl font-bold">
          We're here to take the pain out of deciding what to cook. 
        </Typography>
        <Typography className="pt-4 text-sm md:text-xl">
          Select the time options below and let us find tonight's dinner for you.
        </Typography>
        <TimeGrid />
    </Box>
  
    </>
  )
}

export default HeroBlock