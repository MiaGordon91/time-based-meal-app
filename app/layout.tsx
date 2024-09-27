'use client';

import "./globals.css";
import { Bodoni_Moda } from "next/font/google";
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

const bodoni_moda = Bodoni_Moda({
  subsets: ['latin'],
  variable: "--font-bodoni_moda",
})

const theme = createTheme({
  typography: {
    fontFamily: bodoni_moda.style.fontFamily,
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
        <body className={`${bodoni_moda.variable} font-sans`}>      
          {children}
        </body>
      </ThemeProvider>
    </html>
    
    </>
  );
}
