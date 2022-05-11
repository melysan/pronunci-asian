import { Head, Subhead2, Volume, Toggle, DarkMode, TextSize, FontType, Switch } from "../comps/SetComps"
import TopBar from "../comps/TopBar"
import NavBar from "../comps/NavBar"
import { PageWrap } from "../comps/SetComps"

export default function Settings() {
    return <PageWrap>
                <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <TopBar />
        <Head margin="9em" txt="Settings"></Head>
        <Head margin="9.5em" txt="Volume" weight="400" color="#FC5F6C"/>
        <Volume></Volume>
        <Toggle />
        <Toggle txt='Dark Mode' margin=""/>

        <TextSize />
        <FontType />
    <NavBar />
</ PageWrap>
}