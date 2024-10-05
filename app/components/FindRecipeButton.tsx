import { Button } from "../MTailwind"

const FindRecipeButton = () => {
  return (
    <div className="flex ">
      <Button className="rounded" variant="gradient" ripple={true}>Find Me Recipes</Button>
    </div>
  );
}

export default FindRecipeButton