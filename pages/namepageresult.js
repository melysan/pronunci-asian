// import SearchBar from "../comps/searchbar"
import Header from "../comps/Header"
import NameCard from "../comps/namecardcont"
import styles from '../styles/Home.module.css'
import SearchBar from '../comps/SearchBar'
import TopBar from '../comps/TopBar'
import { useRouter } from 'next/router'
import NavBar from '../comps/NavBar';
import { PageWrap } from "../comps/SetComps"
// import VietName from "../data/vietname_data.json"
import { ChineseName, JapaneseName, KoreanName, Names, VietName } from '../data/Name_data.js'

import { lightTheme, darkTheme } from "../comps/darkmode"
import { useState, useEffect } from 'react';
import { GlobalStyles } from '../comps/globalstyles';
import { ThemeProvider } from "styled-components"

function NamePageResults() {
  const r = useRouter();
  var { page} = r.query;

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


  // if( page === "Chinese") {

  //   {ChineseName.map((item, index) => (
  //     <NameCard txtname={item.Name} country_txt={item.Country} index={index}
  //   />
  //     ))}

  // } else if( page === 'Vietnamese') {
  //   {VietName.map((item, index) => (
  //     <NameCard txtname={item.Name} country_txt={item.Country} index={index}
  //   />
  //     ))}
  //   }
  // }


  return(
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
      <div>
        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
          <TopBar
            backto="/namepage" />
          <Header h1={page}></Header>

          {(page === "Chinese") && ChineseName.map((item, index) => (
            <NameCard ind={index} txtname={item.Name} country_txt={item.Country} />
          ))}
          {(page === "Vietnamese") && VietName.map((item, index) => (
            <NameCard ind={index} txtname={item.Name} country_txt={item.Country} />
          ))}{(page === "Japanese") && JapaneseName.map((item, index) => (
            <NameCard ind={index} txtname={item.Name} country_txt={item.Country} />
          ))}{(page === "Korean") && KoreanName.map((item, index) => (
            <NameCard ind={index} txtname={item.Name} country_txt={item.Country} />
          ))}


          <NavBar namebuttoncolor='#FC5F6C'
            nametextcolor='#FC5F6C'>
          </NavBar>
        </PageWrap>
      </div>



	</ThemeProvider>
  ) 
}

export default NamePageResults;