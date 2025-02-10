import HeroBlock from "./components/HeroBlock";
import TopRecipeGrid from "./components/TopRecipeGrid";
import TimeGrid from "./components/TimeGrid";

export default function Page() {
  
  const topRecipeIds = [3, 9, 8, 11];

  return (
    <>
      <HeroBlock />
      <TimeGrid />
      <TopRecipeGrid data={topRecipeIds} />
    </>
  );
}
