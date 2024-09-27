import Grid from '@mui/material/Grid2'
import React from 'react'
import TimeSelector from './TimeSelector'
import FindRecipeButton from './FindRecipeButton'

const TimeGrid = () => {
  return (
    <>
    <div className="flex items-center flex-wrap justify-center gap-x-2 md:mt-6">
        <TimeSelector />
        <FindRecipeButton />
    </div>
    </>
  )
}

export default TimeGrid
