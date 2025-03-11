"use client";

import { Paper, TextField, InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useCallback, useState } from "react";
import useMediaQueryHook from "../hooks/useMediaQueryHook";
import { useRouter } from "next/navigation";


const SearchRecipes = () => {

  const [expand, setExpanded] = useState(false);
  const [input, setInput] = useState<string>("");
  const {searchBarWidth, isSmallScreen} = useMediaQueryHook();
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const router = useRouter();


  const createQueryString = useCallback(
    (params: {input: string} ) => {
      const searchParams = new URLSearchParams();
    
      Object.entries(params).forEach(([key, value]) => {
        searchParams.set(key, value);
      });
    
      return searchParams.toString();
    },
    []
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter" && input != ""){ 
        e.preventDefault(); //prevents form submission
        const eventTarget = e.target as HTMLInputElement;
    
        setInput(eventTarget.value);
        setErrorMessage(false);

        router.push(
          `/recipes/searchRecipes?${createQueryString({
            "input": input.toString(),
          })}`
        );
        setInput("");
      } else if(e.key === "Enter" && input.length === 0) {
        setErrorMessage(true);
        router.push("/");
      }
    };

  const commonTextFieldProps = {
    required: true,
    placeholder:"Search Recipes",
    value: input,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value),
    onKeyDown: handleKeyDown,
    type:"string",
    error: errorMessage,
    helperText: errorMessage ? "Please enter a recipe" : "",
    slotProps: {
    input: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    },
  },
  };

  return (
    <>
    <Paper
    component="form"
    sx={{ 
      p: "2px 4px", 
      display: {sm:"flex"},  
      width: expand ? {xs: 180} : searchBarWidth,
      transition: "width 0.3s ease-in-out",
      overflow: "hidden",
    }}
    >
      <TextField 
        {...commonTextFieldProps}
        onClick={ isSmallScreen ? () => setExpanded(!expand) : undefined }
      />
      
    </Paper>
    </>
  );
};

export default SearchRecipes;