import { Suspense } from "react";
import RecipePageClient from "../components/RecipePageClient";

//temp fix to resolve missing-suspense-with-csr-bailout in prod build
function RecipeCarouselFallback() {
  return <>test</>;
}

const Page = () => {
  return (
    <>    
    <Suspense fallback={<RecipeCarouselFallback />}>
      <RecipePageClient/>
    </Suspense>     
    </>
  );
};

export default Page;
