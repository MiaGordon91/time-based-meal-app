"use client";

import { Box, Typography, Button, createTheme, ThemeProvider } from "@mui/material";
import userRedirectorHook from "../hooks/useUserRedirectorHook";
import Alert from "@mui/material/Alert";


const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main:"#000000",
        },
      },
  }
}
});

interface FindButtonRecipeButtonProps {
  values: string, 
  data: [string[], string],
}



const FindRecipeButton: React.FC<FindButtonRecipeButtonProps> = ({values, data}) => {

  const {handleClick, errorMessage} = userRedirectorHook(data);
 
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{position: "relative", display: "flex", justifyContent: "center", alignItems: "center", margin: "1rem",}}>
        <Button variant="contained" onClick={handleClick}>
          <Typography sx={{ fontSize:{xs:"0.5rem", sm:"0.75rem", md:"1rem"}}}>
            {values}
          </Typography>
        </Button>
        { errorMessage && (
          // absolute positioning to avoid it shifting the button when alert is thrown
          <Box sx={{ position: "absolute", top: "50%", left: "100%", transform: "translateY(-50%)", ml: 4, mt:2, width: "100%"}}>
            <Alert sx={{color: "#f44336", marginTop: "0.5rem"}} variant="outlined" severity="warning">
              {errorMessage}
            </Alert>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default FindRecipeButton;

