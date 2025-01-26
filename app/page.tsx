"use client";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HeroBlock from "./components/HeroBlock";
import TopRecipeGrid from "./components/TopRecipeGrid";
import TimeGrid from "./components/TimeGrid";

export default function Page() {
  const topRecipeIds = [3, 9, 8, 11];

  return (
    <>
      <NavBar />
      <HeroBlock />
      <TimeGrid />
      <TopRecipeGrid data={topRecipeIds} />
      <Footer />
    </>
  );
}
