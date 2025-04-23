import Grid from "@mui/material/Grid2";
import {Box, Typography } from "@mui/material";

interface RecipeCarouselHeaderProps {
    text?: string
    dietaryParams: string | null,
    timeParams: string | null,
  }

const RecipeCarouselHeader: React.FC<RecipeCarouselHeaderProps> = ({ text, dietaryParams, timeParams }) => {


    if(dietaryParams != null && timeParams != null) {
        return (
            <>       
            <Grid 
            container 
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
                paddingTop: "1rem",
                backgroundColor: "#ef9a9a",
                margin: "0 auto",
            }}
            >
                <Grid size={12}>
                    <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2.25rem" },
                        textAlign: "center",
                        paddingBottom: "0.5rem"
                    }}
                    >
                    Recipes for you
                    </Typography>
                </Grid>
            </Grid>
            
            <Grid 
            container 
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
                padding: "1rem",
                paddingBottom: "1.5rem",
                backgroundColor: "#ef9a9a",
                margin: "0 auto",
            }}
            >
                <Box sx={{ borderRadius: "0.5rem", border: "2px solid", padding: "0.5rem", maxWidth: "300px"}}>
                    <Typography
                    sx={{
                        fontWeight: 300,
                        fontSize: { xs: "0.75rem", md: "1rem" },
                        textAlign: "center"
                    }}
                    >
                    Cook: {timeParams} minutes
                    </Typography>
                </Box>
        
                <Box sx={{ borderRadius: "0.5rem", border: "2px solid", padding: "0.5rem", maxWidth: "300px" }}>
                    <Typography
                    sx={{
                        fontWeight: 300,
                        fontSize: { xs: "0.75rem", md: "1rem" },
                        textAlign: "center"
                    }}
                    >
                    Dietary: {dietaryParams?.replace(/([A-Z])/g, " $1")}
                    </Typography>
                </Box>
            </Grid>
       
           
            <Typography sx={{fontWeight: 500, fontSize: {xs: "1rem", md: "1.25rem"}, paddingTop:{xs:"0.5rem", sm:"1rem", md:"1.5rem", lg:"2rem"}, justifyContent: "center", textAlign: "center"}}>{text}</Typography>
            </>
        );
        } else {
        return (
            <>
            <Grid sx={{padding: "0.5rem", backgroundColor: "#ef9a9a"}} size={12}>
                <Typography sx={{ fontWeight: 700, fontSize: {xs: "1.25rem", md: "1.875rem"}, width:"100%", textAlign: "center", padding: {xs: "0.5rem", md: "1.5rem"}}}>Your search results</Typography>
            </Grid>
            <Grid sx={{padding: "0.75rem", borderRadius: "0.5rem"}} size={12}>
                <Typography sx={{ fontWeight: 600, fontSize: {xs: "1rem", md: "1.5rem"}, width:"100%", textAlign: "center", paddingTop: "0.5rem"}}>{text}</Typography>
            </Grid>
            </>
        );
    }
};   

export default RecipeCarouselHeader;