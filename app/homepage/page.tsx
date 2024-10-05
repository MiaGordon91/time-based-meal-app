'use client';

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeroBlock from "../components/HeroBlock";
import TopRecipeGrid from "../components/TopRecipeGrid";
import DietaryRadioButtons from "../components/DietaryRadioButtons";

export default function Home() {
  return (
    <>
        <NavBar />
        <HeroBlock />
        <DietaryRadioButtons />
        <TopRecipeGrid />
        <Footer />
    </>
  );
}

