import { RedButton } from "../comps/landingbuttons"
import { Land } from "../comps/MainLogo"
import { lightTheme, darkTheme } from "../comps/darkmode"
import { useState, useEffect } from 'react';
import { GlobalStyles } from '../comps/globalstyles';
import { ThemeProvider } from "styled-components"

export default function Landing (){
    const [theme, setTheme] = useState('light');
    const isDarkTheme = theme === "dark";

    
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        const updatedTheme = isDarkTheme ? "light" : "dark";
        setTheme(updatedTheme);
        localStorage.setItem("theme", updatedTheme);
    }


    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (savedTheme && ["dark", "light"].includes(savedTheme)) {
          setTheme(savedTheme);
        } else if (prefersDark) {
          setTheme("dark");
        }
      }, []);


    return (

        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
    
    
    
        <Land />
        </ThemeProvider>
    )
}