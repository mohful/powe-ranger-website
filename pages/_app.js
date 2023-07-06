import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
