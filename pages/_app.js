import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { Analytics } from '@vercel/analytics/react';
import { useState } from "react";

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
