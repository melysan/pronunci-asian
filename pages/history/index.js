import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

import NavBar from '../../comps/NavBar';
import TopBar from '../../comps/TopBar';
import Header from '../../comps/Header';
import HistoryTopicCard from '../../comps/HistoryTopicCard';
import { PageWrap } from '../../comps/SetComps';
import { langList } from "../../data/history_content";


import { lightTheme, darkTheme } from "../../comps/darkmode"
import { useState, useEffect } from 'react';
import { GlobalStyles } from '../../comps/globalstyles';
import { ThemeProvider } from "styled-components"


const Index = () => {
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

  
  return <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />

    <Head>
      <title>History</title>
      <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>
    </Head>
    <PageWrap>
        <TopBar
        backto="/homescreen">
          </TopBar>
        <Header
          h1="History Topics">
        </Header>

 
      {langList.map((item, index) => (
        <div key={index}>
          <Link as={`history/${item.country}`} href="history/[country]">
            <a>
            <HistoryTopicCard
            lang = {item.country}
            flagimg = {item.flag}
            bgimg = {item.bg}>
            </HistoryTopicCard>
            </a>
          </Link>
        </div>
      ))}



  <NavBar
    historybuttoncolor='#FC5F6C'
    historytextcolor='#FC5F6C'>
  </NavBar>

</PageWrap>


	</ThemeProvider>
</>

};
export default Index;