import PronounciationCont from "../comps/pronunicationcont";
import TopBar from '../comps/TopBar';
import NavBar from '../comps/NavBar';
import { PageWrap } from "../comps/SetComps";
import { Names } from "../data/name_data.js";
import { useRouter } from 'next/router';

export default function PronunciationPage() {
    const r = useRouter();
    var { page, index } = r.query;

    // if (page) {

    //     console.log(Names[page][index])
    // }

    if(!Names[page]){ return null;}
    
    return <div>
        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
            <TopBar backto='/namepageresult'></TopBar>
            <PronounciationCont nametxt={Names[page][index].Name}
                countryname={Names[page][index].Lang}
                meaning={Names[page][index].Meaning}
                origin={Names[page][index].Origin}
                period={Names[page][index].Period}
                pronunciation={Names[page][index].Pronunciation}></PronounciationCont>
            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </PageWrap>
    </div>
}


