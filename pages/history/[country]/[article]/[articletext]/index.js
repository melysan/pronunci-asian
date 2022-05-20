import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image';
import styles from '../../../../../styles/Home.module.css';

import NavBar from '../../../../../comps/NavBar';
import TopBar from '../../../../../comps/TopBar';
import Article from '../../../../../comps/Article';
import { PageWrap } from '../../../../../comps/SetComps';

import { lightTheme, darkTheme } from "../../../../../comps/darkmode"
import { useState, useEffect } from 'react';
import { GlobalStyles } from '../../../../../comps/globalstyles';
import { ThemeProvider } from "styled-components"


const HistoryResults = () => {
  const router = useRouter();
  const {country, article, articletext} = router.query;

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

    <PageWrap>
    <Head><title>History Article</title>
     <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap%27);</style>
  </Head>
    <TopBar
    backto="/history"></TopBar>

   <Article
        articletitle={article}
        articlelang={country}
        articleimg="/Coco_Chalkboard.svg"
        articletext={articletext}>
    </Article>

  <NavBar
  historybuttoncolor='#FC5F6C'
  historytextcolor='#FC5F6C'></NavBar>
</PageWrap>



	</ThemeProvider>
);

};

export default HistoryResults;

// this would be article results?