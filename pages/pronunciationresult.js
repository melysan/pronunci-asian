import { PageWrap, Volume, WrapPage } from "../comps/SetComps"
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';
import React, { useState, useEffect } from 'react';
import PronounciationContSlider from "../comps/contslider";
import {Names } from "../data/name_data";
import { useRouter } from 'next/router'

import { lightTheme, darkTheme } from "../comps/darkmode"
import { GlobalStyles } from '../comps/globalstyles';
import { ThemeProvider } from "styled-components"



export default function PronounciationSoundCont () {
    const r = useRouter();
    var { page, index } = r.query;

    // var detailsToShow = null;
    
    // if(page){
    //     detailsToShow = Names[page][index];
    // }


    // // if (page) {
    // //     console.log(Names[page][index]);
    // // }

    // const audioPlay = () => {
    //     var aud = document.querySelector("audio");
    //     aud.play();
    
    // }

     // const volfunc = (num)=>{
    //     var aud = document.querySelector("audio");
    //     aud.volume = num/10 ;
    //

    // }


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

    if (!Names[page]) { return null; }

    return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />

                <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>
        {/* <slider onChange={
            (e)=>volfunc(e.target.value)
        } /> */}
        <PageWrap
        //  onClick={
        //      ()=>func()
        // }
        >
            <TopBar backto="/namepage"></TopBar>
            {/* <audio src={detailsToShow.Audio} autoPlay /> */}
            <PronounciationContSlider 

            nametxt={Names[page][index].Name}
                countryname={Names[page][index].Lang}
                meaning={Names[page][index].Meaning}
                origin={Names[page][index].Origin}
                period={Names[page][index].Period}
                pronunciation={Names[page][index].Pronunciation}>
            </PronounciationContSlider>
            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </PageWrap>
    </ThemeProvider>
}
