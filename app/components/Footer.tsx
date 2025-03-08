import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
 
    const Footer = () => {

    const footerOptions = {"@2023 MealGenie": "/","About Us": "/","License": "/", "Contact Us": "/"};

    return (
    <>

    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={1}>
        <BottomNavigation
        showLabels
        >
            {Object.entries(footerOptions).map(([text, link]) => (
                <BottomNavigationAction key={text} label={text} href={link}>
                </BottomNavigationAction>
            ))}
        </BottomNavigation>
        </ Paper>
    </>
    );
    };
    export default Footer;