'use client';

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeroBlock from "../components/HeroBlock";
import TimeGrid from "../components/TimeGrid";
import TopRecipeGrid from "../components/TopRecipeGrid";

export default function Home() {
  return (
    <>
        <NavBar />
        <HeroBlock />
        <TopRecipeGrid />
        <Footer />
    </>
  );
}

