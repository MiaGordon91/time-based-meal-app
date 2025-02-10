import { useState } from "react";

const useDietarySelectionHook = (onSelectionChange: (suitableRecipeIds: string[]) => void ) => {

  // handle checkbox groups & define dietaries object which matches the value of each checkbox below 
  const [dietaries, setDietaries] = useState({
    vegan: false, 
    vegetarian: false, 
    glutenFree: false, 
    lactoseIntolerant: false, 
    none: false
  });

  // pass event as parameter
  const handleDietarySelection = (event: React.ChangeEvent<HTMLInputElement>) => {
      
      //Access the value and checked property directly to update and manage the state
      const {value, checked} = event.target;
      
      //Update the dietary selection state to conditionally disable checkboxes
      setDietaries((prevDietaries) => {
        const updatedDietaries =
          value === "none" ?
          {
              vegan: false, 
              vegetarian: false, 
              glutenFree: false, 
              lactoseIntolerant: false, 
              none: checked,
            }
            : {
              ...prevDietaries, 
            [value]: checked,
            none: false,
            };

            return updatedDietaries;
        });


      // loop over key of dietary object, if the key === the value of the 
      // selected checkbox then update as checked - its a way to filter the selected items

      // This creates a new state object with each change of behaviour (immutability) instead
      // of mutating existing one - setting checked properly allows dynamic behaviour 
      const selectedItems = Object.keys(dietaries).filter(
        (key) => key === value ? checked : dietaries[key as keyof typeof dietaries]); // required to tell TS that the key also exists in the dietaries object
  
        //send updated items to callback as an array
        onSelectionChange(selectedItems);

        return selectedItems;
      };


      // receive dietary as parameter and conditionally check what has been selected 
      // to trigger disabled functionality
      const isCheckboxDisabled = (dietary: string) => {
        // checks if any value of dietary object is true, except 'none' at index 4
        return dietary === "none" ? Object.values(dietaries).some((val, i) => i !== 4 && val) 
        : dietaries.none;
      };


    return {dietaries, handleDietarySelection, isCheckboxDisabled};

  };

export default useDietarySelectionHook;