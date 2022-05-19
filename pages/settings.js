import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../comps/globalstyles"
import { lightTheme, darkTheme } from "../comps/darkmode"
import { Head, Subhead2, Volume, Toggle, DarkMode, TextSize, FontType, Switch } from "../comps/SetComps"
import TopBar from "../comps/TopBar"
import NavBar from "../comps/NavBar"
import { PageWrap } from "../comps/SetComps"
import { useState } from "react"
import ToggleSwitch, { Toggle2 } from "../comps/switch"


export default function Settings({
    state = false
}) {

    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }



    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>

            <PageWrap>
                    {/* <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style> */}

                    <TopBar />
                    <Head margin="9em" txt="Settings"></Head>
                    <Head margin="9.5em" txt="Volume" weight="400" color="#FC5F6C"/>
                    <Volume></Volume>
                    <Toggle toggleTheme={ themeToggler } />
                    {/* <Toggle  txt='Dark Mode' margin=""/> */}

                    {/* <ToggleSwitch  toggleTheme={ themeToggler }/> */}
                    {/* <button onClick={
                        themeToggler
                    }>
                        Switch
                    </button> */}

                    <TextSize />
                    <FontType />
                    <NavBar 
                        setbuttoncolor='#FC5F6C'
                        settextcolor='#FC5F6C'/>
            </ PageWrap>
    </ThemeProvider>
        
    )
}