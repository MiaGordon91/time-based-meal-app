import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Toolbar } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeIcon from "@mui/icons-material/Home";
import SearchRecipes from "./SearchRecipes";
   

  interface NavBarProp {
    links: { [key: string]: string };
  }

  const NavBar: React.FC<NavBarProp> = ({links}) => {

    return (
      <>
      <Box>
      <AppBar sx={{paddingBlock:1, position:"static"}}>
        <Toolbar sx={{ display: "flex" }}>
          <RestaurantIcon sx={{ fontSize: {xs:30, lg:40}}}/>
          <Typography
            component="a"
            href="/"
            sx={{
                mx: 1,
                display: {xs:"none", sm:"flex"},
                fontSize: { xs: "1.25rem", lg: "1.5rem", xl: "1.875rem" },
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "black",
            }}
          > MealGenie </Typography>

          <Box sx={{ ml: "auto", display: { xs: "flex" }, gap: {xs: 1, sm: 2}}}>
            {Object.entries(links).map(([page, route]) => (    
              <IconButton  key={page} href={route}>
                <HomeIcon key={page} sx={{fontSize: {xs: "1.563rem", sm: "2.188rem"}}}/> 
              </IconButton >       
            ))} 
            <SearchRecipes />
          </Box> 
    
        </Toolbar>
      </AppBar>  
    </Box>  
    </>
    );
  };

  export default NavBar;
  