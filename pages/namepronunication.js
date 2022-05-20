import PronounciationCont from "../comps/pronunicationcont"; 
import styles from '../styles/Home.module.css'
import TopBar from '../comps/TopBar';
import NavBar from '../comps/NavBar';
import React, { useState } from 'react';
import { PageWrap } from "../comps/SetComps";
import { Names } from "../data/name_data.js";
import { useRouter } from 'next/router';

export default function PronunciationPage() {
    const r = useRouter();
    var { page, index } = r.query;

    // if (item === undefined) {
    //     item = 0;
    // }

    if (page) {

        console.log( Names[page][index])
    }


    return <div>
        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
            <TopBar backto='/namepageresult'></TopBar>
            {/* <PronounciationCont nametxt={VietName[item].Name}></PronounciationCont> */}
            {/* {(page) && Names.map((o, index) => (
                <PronounciationCont nametxt={page} countryname={Names[item].Country}></PronounciationCont>
            ))} */}

        
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


