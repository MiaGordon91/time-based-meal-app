import { useMediaQuery, useTheme } from "@mui/material";

const useMediaQueryHook = () => {

    // use hook to manage the size of the buttons and time box
    const theme = useTheme();
      
    // Media queries for different breakpoints
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // sm and below
    
    return {
      // Determine the size based on screen width
      checkBoxSize: isSmallScreen ? "small" : "medium",
      labelFontSize: isSmallScreen ? "0.85rem" : "1.25rem",
      searchBarWidth: isSmallScreen ? 50 : 200,
      isSmallScreen

    } as const;
};

export default useMediaQueryHook;