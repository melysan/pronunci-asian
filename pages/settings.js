import { Head, Subhead2, Volume, Sound, DarkMode, TextSize } from "../comps/SetComps"

export default function Settings() {
    return <div className="cont">
        <Head margin="9em" txt="Settings"></Head>
        <Subhead2 txt="Volume" margin='10em'></Subhead2>
        <Volume></Volume>
        <Sound />
        <DarkMode />
        <TextSize />
        <div></div>
    </div>
}