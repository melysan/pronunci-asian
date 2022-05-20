import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../comps/globalstyles"
import { useDarkMode } from "../comps/useDarkMode"
import { lightTheme, darkTheme } from "../comps/darkmode"
import { Head, Subhead2, Volume, Toggle, DarkMode, TextSize, FontType, Switch } from "../comps/SetComps"
import TopBar from "../comps/TopBar"
import NavBar from "../comps/NavBar"
import { PageWrap } from "../comps/SetComps"
import { useState, useEffect } from "react"



export default function Settings({
}) {

    // const stored = localStorage.getItem(theme);

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
    // const stored = window.localStorage.getItem('isDarkMode');

    // const stored = localStorage.getItem("isDarkMode");
    // const [isDarkMode, setIsDarkMode] = useState(
    //   stored === "true" ? true : false
    // );

    // console.log(theme === 'dark' ? true : false )

    return (
        <ThemeProvider theme={
            theme === 'light' ? lightTheme : darkTheme

            }>
        <GlobalStyles/>

            <PageWrap>
                    {/* <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style> */}

                    <TopBar />
                    <Head margin="9em" txt="Settings"></Head>
                    <Head margin="9.5em" txt="Volume" weight="400" color="#FC5F6C"/>
                    <Volume></Volume>
                    <Toggle txt="Dark Mode" margin=''
                     toggleTheme =  { themeToggler }
                        
                    // onChange={ () => {
                    //     setIsDarkMode(!isDarkMode);
                    //     localStorage.setItem("isDarkMode", !isDarkMode);

                    // }}

                        />


                    <TextSize />
                    <FontType />
                    <NavBar 
                        setbuttoncolor='#FC5F6C'
                        settextcolor='#FC5F6C'/>
            </ PageWrap>
    </ThemeProvider>
        
    )
}