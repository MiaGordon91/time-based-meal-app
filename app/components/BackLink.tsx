"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const BackLink = () => {

    const router = useRouter();

    return (
        <Button sx={{fontSize: {xs: "0.75rem", md: "1rem"}, align: "left"}} href="#" color="inherit" onClick={() => router.back()}>
            Back to recipes
        </Button>
    );
};

export default BackLink;