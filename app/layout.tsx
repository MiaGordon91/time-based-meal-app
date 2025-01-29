'use client';

import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

const roboto_flex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto_flex',
  display: 'swap'
})

const theme = createTheme({
  typography: {
    fontFamily: roboto_flex.style.fontFamily,
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={`${roboto_flex.variable} font-sans`}>      
          {children}
        </body>
      </ThemeProvider>
    </html>
    
    </>
  );
}
