import { PageWrap, Volume, WrapPage } from "../comps/SetComps"
import PronounciationCont from "../comps/pronunicationcont"
import styles from '../styles/Home.module.css'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';
import React, { useState } from 'react';
import PronounciationContSlider from "../comps/contslider";
import {Names } from "../data/name_data";
import { useRouter } from 'next/router'




export default function PronounciationSoundCont () {
    const r = useRouter();
    var { page, index } = r.query;

    // var detailsToShow = null;
    
    // if(page === "Chinese"){
    //     detailsToShow = Names[page][index];
    // }


    if (page) {
        console.log(Names[page][index]);
    }
    // const func = () => {
    //     var aud = document.querySelector("audio");
    //     aud.play();
    //
    // }

     // const volfunc = (num)=>{
    //     var aud = document.querySelector("audio");
    //     aud.volume = num/10 ;
    //
    // }
    return <div>
                <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>
        {/* <slider onChange={
            (e)=>volfunc(e.target.value)
        } /> */}
        <PageWrap
        //  onClick={
        //      ()=>func()
        // }
        >
            <TopBar backto="/namepage"></TopBar>
            {/* <audio src={detailsToShow.Audio} autoPlay /> */}
            <PronounciationContSlider 
            nametxt={Names[page][index].Name}
                countryname={Names[page][index].Lang}
                meaning={Names[page][index].Meaning}
                origin={Names[page][index].Origin}
                period={Names[page][index].Period}
                pronunciation={Names[page][index].Pronunciation}>
            </PronounciationContSlider>
            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </PageWrap>
    </div>
}
