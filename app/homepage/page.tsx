'use client';

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeroBlock from "../components/HeroBlock";
import TopRecipeGrid from "../components/TopRecipeGrid";
import TimeGrid from "../components/TimeGrid";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroBlock />
      <TimeGrid />
      <TopRecipeGrid />
      <Footer />
    </>
  );
}

