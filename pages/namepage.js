import FlagCont from '../comps/countriescont'
// import Link from 'next/link'
import Header from '../comps/Header'
import styles from '../styles/Home.module.css'
// import { useRouter } from 'next/router'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';
import { PageWrap } from '../comps/SetComps'
import { Countries } from '../data/countries_data.js'
import NamePageResults from './namepageresult'
import NameCard from '../comps/namecardcont'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { VietName } from '../data/Name_data'

import { lightTheme, darkTheme } from "../comps/darkmode"
import { useState, useEffect } from 'react';
import { GlobalStyles } from '../comps/globalstyles';
import { ThemeProvider } from "styled-components"


export default function CountriesOptions() {
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
        <div>
        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
            <TopBar
                backto="/homescreen" />
            <Header h1='Name Topics'></Header>
            <div className={styles.gridcontainer}>

                {Countries.map((item, index) =>
                    <div key={index}>
                        <FlagCont text={item.country} img={item.image}>
                        </FlagCont>
                    </div>
                )}
            </div>
            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </PageWrap>
    </div >
    
    
    
        </ThemeProvider>


    )
    
    
}

