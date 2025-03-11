import Grid from "@mui/material/Grid2";
import {Typography } from "@mui/material";

interface RecipeCarouselHeaderProps {
    text: string
    dietaryParams: string | null,
    timeParams: string | null,
  }

const RecipeCarouselHeader: React.FC<RecipeCarouselHeaderProps> = ({ text, dietaryParams, timeParams }) => {

    if(dietaryParams != null && timeParams != null) {
        return (
            <>
            <Grid
            container 
            sx={{paddingInline: {md: "1.75rem" }}}
            >
            <Grid sx={{padding: "0.5rem", backgroundColor: "#f5f5f5"}} size={{xs: 12}}>
                <Typography sx={{ fontWeight: 700, fontSize: {md: "2.25rem"}, width:"100%", textAlign: "center", paddingBottom: "0.5rem"}}>Recipes for you</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: {xs: "1rem", md: "1.875rem"}, width:"100%", textAlign: "center", paddingBottom: "0.5rem"}}>{dietaryParams?.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}  | {timeParams} minutes</Typography>
            </Grid>
            <Grid sx={{padding: "0.75rem", borderRadius: "0.5rem"}} size={{xs: 12}}>
                <Typography sx={{ fontWeight: 500, fontSize: {xs: "1rem", md: "1.5rem"}, width:"100%", textAlign: "center", paddingTop: "0.5rem"}}>{text}</Typography>
            </Grid>
            </Grid>
            </>
        );
        } else {
        return (
            <>
            <Grid sx={{padding: "0.5rem", backgroundColor: "#f5f5f5"}} size={12}>
                <Typography sx={{ fontWeight: 700, fontSize: {md: "2.25rem"}, width:"100%", textAlign: "center", paddingBottom: "0.5rem"}}>Your search results</Typography>
            </Grid>
            <Grid sx={{padding: "0.75rem", borderRadius: "0.5rem"}} size={12}>
                <Typography sx={{ fontWeight: 600, fontSize: {xs: "1rem", md: "1.5rem"}, width:"100%", textAlign: "center", paddingTop: "0.5rem"}}>{text}</Typography>
            </Grid>
            </>
        );
    }
};   

export default RecipeCarouselHeader;