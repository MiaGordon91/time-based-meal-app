import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
 
    const Footer = () => {

    const footerOptions = {"@2023 FoodieGenie": "/","About Us": "/","License": "/", "Contribute": "/", "Contact Us": "/"};

    return (
    <>
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, display: "flex-wrap" }} elevation={1}>
            <BottomNavigation
            showLabels
            >
                {Object.entries(footerOptions).map(([text, link]) => (
                    <BottomNavigationAction 
                    sx={{fontSize: { xs: "1.25rem", lg: "1.5rem", xl: "1.875rem" }}} key={text} label={text} href={link}>
                    </BottomNavigationAction>
                ))}
            </BottomNavigation>
        </ Paper>
    </>
    );
    };
    export default Footer;