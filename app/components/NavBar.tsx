'use clent';

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Toolbar } from "@mui/material";
import { SetStateAction, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
   

  const pages = ["Find Recipes", "My Account"];


  const navBar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    
    const handleOpenNavMenu = (event: { currentTarget: SetStateAction<null>; }) => {
      setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
      setAnchorElNav(null)

    }

    return (
      <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar className="py-4 bg-inherit" position="static">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            fontFamily= 'monospace'
            sx={{
                mr: 2,
                display: {xs:"flex"},
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.5rem',
                color: 'black',
            }}
          > LOGO </Typography>

          <Box className="flex justify-end" sx={{flexGrow:1, display: {xs:"flex", sm: "none"} }}>
            <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="default"
              >
                <MenuIcon sx={{ display: {xs:"flex", sm: "none"} }}/>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center'}}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
        
          <Box className="gap-4" sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>
             {pages.map((page) => (
              <IconButton className="text-black" size="small">{page}</IconButton>
              ))} 
          </Box> 
    
        </Toolbar>
    </AppBar>     
    </Box>  
    </>
    );
  }

  export default navBar;
  