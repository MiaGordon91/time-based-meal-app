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

            <Grid sx={{justifyContent:"center", padding: "0.5rem", backgroundColor: "#f5f5f5"}}>
                <Typography sx={{ fontWeight: 700, fontSize: {xs: "1.25rem", sm:"1.5rem", md: "2.25rem"}, textAlign: "center", paddingBottom: "0.5rem"}}>
                    Recipes for you
                </Typography>
            </Grid>  
         
            <Grid 
                container 
                spacing={2}
                sx={{justifyContent:"center", padding: "0.5rem", paddingBottom: "1.5rem", backgroundColor: "#f5f5f5"}}
                >
                <Grid size={{xs: 6}}>     
                    <Box sx={{borderRadius: "0.5rem", border: "2px solid"}}>
                        <Typography sx={{ fontWeight: 300, fontSize: {xs: "0.75rem", md: "1rem"}, textAlign: "center", padding: "0.5rem"}}>Cook: {timeParams} minutes</Typography> 
                    </Box>
                </Grid>

                <Grid size={{xs: 6}}>  
                    <Box sx={{borderRadius: "0.5rem", border: "2px solid"}}>
                        <Typography sx={{ fontWeight: 300, fontSize: {xs: "0.75rem", md: "1rem"},textAlign: "center", padding: "0.5rem"}}>
                           Dietary:{dietaryParams?.replace(/([A-Z])/g, " $1")}</Typography>
                    </Box> 
                </Grid>
            </Grid>
           
            <Typography sx={{fontWeight: 500, fontSize: {xs: "1rem", md: "1.25rem"}, paddingTop:{xs:"0.5rem", sm:"1rem", md:"1.5rem", lg:"2rem"}, justifyContent: "center", textAlign: "center"}}>{text}</Typography>
            </>
        );
        } else {
        return (
            <>
            <Grid sx={{padding: "0.5rem", backgroundColor: "#f5f5f5"}} size={12}>
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