import React from 'react'
import TimeSelector from './TimeSelector'
import FindRecipeButton from './FindRecipeButton'

const TimeGrid = () => {
  return (
    <>
    <div className="flex items-center flex-wrap justify-center gap-x-4 mb-6 sm:mb-7 md:mt-6 bg-gray-100">
        <TimeSelector />
        <FindRecipeButton />
    </div>
    </>
  )
}

export default TimeGrid
