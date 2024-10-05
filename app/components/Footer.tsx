"use client"

import { Typography } from "../MTailwind";
 
    const footer = () => {
    return (
            <footer className="bottom-0 flex w-full flex-row wrap items-center justify-center bg-gray-100 py-2 lg:py-6 selection:text-center mt-8">
                <ul className="flex flex-wrap justify-center gap-x-8">
                
                    <li>
                        <Typography className="text-xs md:text-small lg:text-base">
                            &copy; 2023 Find Me A Recipe
                        </Typography>
                    </li>
                
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            className="text-xs md:text-small lg:text-base"
                        >
                            About Us
                        </Typography>
                    </li>

                    <li>
                        <Typography
                            as="a"
                            href="#"
                            className="text-xs md:text-small lg:text-base"
                        >
                            License
                        </Typography>
                    </li>

                    <li>
                        <Typography
                            as="a"
                            href="#"
                            className="text-xs md:text-small lg:text-base"
                        >
                            Contribute
                        </Typography>
                    </li>

                    <li>
                        <Typography
                            as="a"
                            href="#"
                            className="text-xs md:text-small lg:text-base"
                        >
                            Contact Us
                        </Typography>
                    </li>

                </ul>
            </footer>
    );
    }
    export default footer;