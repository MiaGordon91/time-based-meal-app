'use clent';

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Toolbar } from "@mui/material";
   
  const navBar = () => {
    return (
      <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{backgroundColor: "transparent", color: "black", paddingTop:"2rem", paddingBottom:"2rem"}}>
        <Toolbar>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            fontFamily= 'monospace'
            sx={{
                mr: 2,
                display: {md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.5rem',
                color: 'black',
            }}
          > LOGO </Typography>

          <Stack spacing={2} direction="row" justifyContent="flex-end" sx={{ flexGrow: 1 }}>
            <IconButton
                size="medium"   
                aria-label="current user account"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            > My Account</IconButton>

            <IconButton
                size="medium"
                edge="end" 
                aria-label="current user account"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                > Find Receipes</IconButton>
          </Stack>
        </Toolbar>
    </AppBar>     
    </Box>  
    </>
    );
  }

  export default navBar;
  