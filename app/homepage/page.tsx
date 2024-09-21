import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Grid from '@mui/material/Grid2';
import TimeSelector from "../components/TimeSelector";
import HeroBlock from "../components/HeroBlock";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <NavBar />

        <HeroBlock />

        <Grid 
        container 
        className = "w-auto mx-12"
        // spacing={{ xs: 2 }} 
        columns={{ sm: 8, md: 16 }}
        >
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <TimeSelector />
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <TimeSelector />
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }} >
            <TimeSelector />
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <TimeSelector />
          </Grid>
        </Grid>

        <Footer />
    </>
  );
}

