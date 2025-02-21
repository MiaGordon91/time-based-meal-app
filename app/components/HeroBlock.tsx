import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import heroBlockImage from "/public/images/paella.jpg";

const HeroBlock = () => {
  return ( 
    <Box className="relative w-full border-[3.5px]">
        <Image
            src={heroBlockImage}
            alt="paella image"
            className="h-20 md:h-60 w-full object-cover"
        />
        <Box className="grid flex-col absolute inset-0 w-full place-items-center">
            <Box className="text-center md:w-3/4 bg-black/20 px-2 md:p-5">
                <Typography
                    color="white" 
                    className="mb-3 text-lg md:text-3xl lg:text-4xl xl:text-5xl sm:font-bold"
                    >
                    Not sure what to have for dinner?
                </Typography>
                <Typography
                    sx={{ display: { xs: "none", sm: "block" }}}
                    color="white"
                    className="xs:hidden md:pt-4 text-base md:text-xl lg:text-2xl"
                    >
                    We&apos;re here to take the pain out of deciding what to cook
                </Typography>
            </Box>
        </Box>
    </Box>
  );
};

export default HeroBlock;

