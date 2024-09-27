import { Button } from "../MTailwind"

const FindRecipeButton = () => {
  return (
    <div className="flex ">
      <Button className="rounded-full" variant="gradient" ripple={true}>Find Me Recipes</Button>
    </div>
  );
}

export default FindRecipeButton