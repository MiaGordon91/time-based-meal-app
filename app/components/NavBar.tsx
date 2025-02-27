import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
   

  const NavBar = () => {

    // const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    
    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    //   setAnchorElNav(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //   setAnchorElNav(null);

    // };

    const pages = {"Home": "/", "Find Recipes": "/", "My Account": "/"};
  

    return (
      <>
      <Box>
      <AppBar sx={{paddingBlock:1, position:"static"}}>
        <Toolbar sx={{ display: "flex" }}>
          <RestaurantIcon sx={{ fontSize: {xs:30, lg:40}}}/>
          <Typography
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
                mx: 1,
                display: {xs:"none", sm:"flex"},
                fontSize: { xs: "1.25rem", lg: "1.5rem", xl: "1.875rem" },
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "black",
            }}
          > FoodieGenie </Typography>

          <Box sx={{flexGrow:1, display: {xs:"flex", sm: "none"} }}>
            <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                color="default"
              >
                <MenuIcon sx={{ display: {xs:"flex", sm: "none"} }}/>
            </IconButton>

            <Menu
              id="menu-appbar"
              // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "center",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "center",
                horizontal: "right",
              }}
              open={false}
              // open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              >
              {Object.keys(pages).map((page) => (
                <MenuItem key={page}>
                  <Typography sx={{ textAlign: "center"}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Box sx={{ ml: "auto", display: { xs: "none", sm: "flex" }, gap: 2}}>
            {Object.entries(pages).map(([page, route]) => (      
                <IconButton key={page} href={route} size="medium">
                  <Typography>
                    {page}
                  </Typography>
                </IconButton>            
            ))} 
          </Box> 
    
        </Toolbar>
      </AppBar>  
    </Box>  
    </>
    );
  };

  export default NavBar;
  