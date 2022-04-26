import { Head, Subhead2, Volume, Toggle, DarkMode, TextSize, FontType } from "../comps/SetComps"
import TopBar from "../comps/TopBar"
import NavBar from "../comps/NavBar"
import { PageWrap } from "../comps/SetComps"

export default function Settings() {
    return <PageWrap>
                <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <TopBar />
        <Head margin="9em" txt="Settings"></Head>
        <Subhead2 txt="Volume" margin='10em'></Subhead2>
        <Volume></Volume>
        <Toggle />
        <Toggle txt='Dark Mode' margin=""/>
        <TextSize />
        <FontType />
    <NavBar />
</ PageWrap>
}