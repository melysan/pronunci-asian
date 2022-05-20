import styled from 'styled-components'
import { Head, SetHead, Wrapper, FavRow, PageWrap } from '../comps/SetComps'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'

import { lightTheme, darkTheme } from "../comps/darkmode"
import { useState, useEffect } from 'react';
import { GlobalStyles } from '../comps/globalstyles';
import { ThemeProvider } from "styled-components"

export default function Favourites(){
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

    <PageWrap>
          <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <TopBar />
        <Head txt='Favourites' margin='9em' color='' weight=''/>
        <FavRow where='history'/>
        <FavRow topic='Name' article='Minh' img='/name.svg' where='namepage'/>
        <FavRow topic='Name' article='Yuki'language='Japanese' where='history'/> 
        <FavRow article='How to read the structure of Vietnamese names' where='history'/>
        <NavBar favebuttoncolor='#FC5F6C'
          favetextcolor='#FC5F6C'/>

    </PageWrap>


	</ThemeProvider>


}