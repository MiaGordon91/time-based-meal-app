import React from "react";
import RecipeCardClient from "./RecipeCardClient";
import Grid from "@mui/material/Grid2";

const LoadingSkeleton = () => {

  return (
    <>
        <Grid
          container
          sx={{justifyContent:"center", padding: "1.75rem"}}
          >
            <Grid key={1} size={{xs: 6, md: 3}} sx={{ maxWidth: "600px", padding: "20px" }}>
              <RecipeCardClient />
            </Grid> 

            <Grid key={2} size={{xs: 6, md: 3}} sx={{ maxWidth: "600px", padding: "20px" }}>
              <RecipeCardClient />
            </Grid> 

            <Grid key={3} size={{xs: 6, md: 3}} sx={{ maxWidth: "600px", padding: "20px" }}>
              <RecipeCardClient />
            </Grid>

        </Grid>  
    </>
  );
};

export default LoadingSkeleton;