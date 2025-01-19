import React from 'react'
import RecipeCardSummary from './RecipeCardSummary'
import Grid from '@mui/material/Grid2'

interface RecipeCarouselProps {
  data: string[] | null
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({data}) => {
 
  let mdSize = 0

  switch(data.length) {
    case 4: 
      mdSize = 3;
      break;
    case 3:
      mdSize = 4;
      break;
    case 2:
      mdSize = 6;
      break;
    case 1:
      mdSize = 12;
  }
    

  return (
    <Grid
      container 
      className="md:px-7 mx-5 md:mx-9 pt-10"
      spacing={{ xs: 2 }}
      >
        <Grid className='p-2 md:p-5 bg-gray-100 rounded-lg' size={{xs: 12}}>
          <Header />
        </Grid>
         {data?.map((x) => (
          <Grid size={{xs: 6, md: mdSize}}>
            <RecipeCardSummary value={parseInt(x)}/>
          </Grid> 
         ))}
          
     </Grid>
  )

  function Header() {
    const text = 'Recipes for you';
    const supportingText = 'A selection of carefully selected meal ideas suited to your dietaries and time preferences'

    return [
      <h1 className="font-bold text-base md:text-3xl w-full text-center pb-3">{text}</h1>,
      <h3 className="text-xs md:text-xl w-full text-center">{supportingText}</h3>
    ]
    
  }
}
export default RecipeCarousel