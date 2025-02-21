"use client";

import { Box, Typography, Button, createTheme, ThemeProvider } from "@mui/material";
// import { Button } from "../MTailwind";
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
      <Box className='relative flex justify-center items-center my-4'>
        <Button variant="contained" onClick={handleClick}>
          <Typography>
            {values}
          </Typography>
        </Button>
        { errorMessage && (
          // absolute positioning to avoid it shifting the button when alert is thrown
          <Box className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 mt-2 w-full" >
            <Alert className="text-red-500 mt-2" variant="outlined" severity="warning" >
              {errorMessage}
            </Alert>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default FindRecipeButton;

