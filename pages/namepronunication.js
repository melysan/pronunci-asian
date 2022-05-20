import PronounciationCont from "../comps/pronunicationcont"; 
import styles from '../styles/Home.module.css'
import TopBar from '../comps/TopBar';
import NavBar from '../comps/NavBar';
import React, { useState, useEffect } from 'react';
import { PageWrap } from "../comps/SetComps";
import { VietName, ChineseName, KoreanName, JapaneseName, Names } from "../data/Name_data.js";
import { useRouter } from 'next/router';

import { lightTheme, darkTheme } from "../comps/darkmode"
import { GlobalStyles } from '../comps/globalstyles';
import { ThemeProvider } from "styled-components"


export default function PronunciationPage() {
    const r = useRouter();
    var { page, index } = r.query;

    // if (item === undefined) {
    //     item = 0;
    // }

    if (page) {

        console.log( Names[page][index])
    }

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


    return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />

        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
            <TopBar backto='/namepageresult'></TopBar>
            {/* <PronounciationCont nametxt={VietName[item].Name}></PronounciationCont> */}
            {/* {(page) && Names.map((o, index) => (
                <PronounciationCont nametxt={page} countryname={Names[item].Country}></PronounciationCont>
            ))} */}

        
                <PronounciationCont nametxt={Names[page][index].Name}
                countryname={Names[page][index].Lang} 
                meaning={Names[page][index].Meaning} 
                origin={Names[page][index].Origin} 
                period={Names[page][index].Period} 
                pronunciation={Names[page][index].Pronunciation}></PronounciationCont>
    

            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </PageWrap>


	</ThemeProvider>
    

}


