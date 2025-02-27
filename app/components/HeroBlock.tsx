import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import heroBlockImage from "/public/images/paella.jpg";

const HeroBlock = () => {
  return ( 
    <Box sx={{position: "relative", width: "100%", borderWidth: "3.5px"}}>
        <Image
            src={heroBlockImage}
            alt="paella image"
            className="h-20 md:h-60 w-full object-cover"
        />
        <Box sx={{display: "grid", flexDirection: "column", position: "absolute", inset: "0px", width: "100%", placeItems: "center" }}>
            <Box sx={{textAlign: "center", padding: "0.5rem", backgroundColor: "rgb(0 0 0 / 0.4)", width: {md: "75%"}, }}>
                <Typography
                    color="white" 
                    sx={{marginBottom: "0.75rem", fontSize: { xs:"1.125rem", sm: "1.875rem", lg:"2.25rem", xl:"3rem"}, fontWeight: {sm: 700}}}
                    >
                    Not sure what to have for dinner?
                </Typography>
                <Typography
                    sx={{ display: { xs: "none", sm: "block" }, fontSize: { xs:"1rem", md: "1.25rem", lg:"1.5rem"} }}
                    color="white"
                    >
                    We&apos;re here to take the pain out of deciding what to cook
                </Typography>
            </Box>
        </Box>
    </Box>
  );
};

export default HeroBlock;

