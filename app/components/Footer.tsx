import { Typography } from "../MTailwind";
 
    const footer = () => {
    return (
        <div style={{ position: "absolute", bottom: 0, width:"100%" }} className="bg-gray-100">
            <footer className="container mx-auto py-6 flex w-full flex-row flex-wrap items-center justify-center bg-gray-100">
                <Typography color="blue-gray" className="font-normal">
                    &copy; 2023 Find Me A Recipe
                </Typography>

                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </Typography>
                    </li>

                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            License
                        </Typography>
                    </li>

                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contribute
                        </Typography>
                    </li>

                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </Typography>
                    </li>

                </ul>
            </footer>
        </div>
    );
    }
    export default footer;