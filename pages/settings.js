import { Head, Subhead2, Volume, Toggle, DarkMode, TextSize } from "../comps/SetComps"

export default function Settings() {
    return <div className="cont">
        <Head margin="9em" txt="Settings"></Head>
        <Subhead2 txt="Volume" margin='10em'></Subhead2>
        <Volume></Volume>
        <Toggle />
        <Toggle txt='Dark Mode' margin=""/>
        <TextSize />
        <div></div>
    </div>
}