import { Carousel } from "@material-tailwind/react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const HeroBlock = () => {
  return ( 
        <Box className="relative h-full w-full border-[3.5px]">
            <img
                src="https://www.insidetherustickitchen.com/wp-content/uploads/2020/07/Gnocchi-alla-Sorrentina-1200px-Inside-the-rustic-kitchen-1.jpg"
                alt="image 1"
                className="h-40 md:h-60 lg:h-80 w-full object-cover"
            />
            <div className="grid flex-col absolute inset-0 w-full place-items-center bg-black/50">
                <div className="text-center w-3/4">
                    <Typography
                        color="white" 
                        className="mb-4 text-2xl md:text-3xl lg:text-5xl font-bold"
                        >
                        Not sure what to have for dinner?
                    </Typography>
                    <Typography
                        sx={{ display: { xs: 'none', sm: 'block' }}}
                        color="white"
                        className="xs:hidden md:pt-4 text-base md:text-2xl lg:text-4xl" 
                        >
                        We're here to take the pain out of deciding what to cook
                    </Typography>
                </div>
            </div>
        </Box>
  )
}

export default HeroBlock

