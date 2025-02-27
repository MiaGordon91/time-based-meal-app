
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto_Flex } from "next/font/google";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";


const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto_flex",
  display: "swap"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
        <body className={`${roboto_flex.variable} font-sans`}> 
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Navbar />     
              {children}
              <Footer />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
    </html>
    
    </>
  );
}
