import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useUserRedirectorHook = (data: [string[], string]) => {

    const [dietaries, time] = data;
    const [errorMessage, setErrorMessage] = useState<string| null >(null);

    const router = useRouter();

    //function takes an object of query parameters and sets k:v pairs to URLSearchParams
    const createQueryString = useCallback(
      (params: { [key: string]: string }) => {
        const searchParams = new URLSearchParams();
       
        Object.entries(params).forEach(([key, value]) => {
          searchParams.set(key, value);
        });
      
        return searchParams.toString();
      },
      []
    );
  

    const handleClick = () => {
      if(time && dietaries.length > 0){ 
          setErrorMessage(null);
              if(dietaries.length > 0 && time) {
                router.push(
                  `/recipes?${createQueryString({
                    "dietary": dietaries.join(","),
                    "time": time.toString()
                  })}`
                );
              } else {
                router.push("/");
              }
      } else {
        setErrorMessage("Please select your dietary and time requirements");
      }
    };

    return {handleClick, errorMessage, dietaries, time};
};

export default useUserRedirectorHook;