import PronounciationCont from "../comps/pronunicationcont"
import styles from '../styles/Home.module.css'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';
import React, { useState } from 'react';
import { PageWrap } from "../comps/SetComps";
import { VietName, ChineseName, KoreanName, JapaneseName, Names } from "../data/Name_data.js";
import { useRouter } from 'next/router';


export default function PronunciationPage() {
    const r = useRouter();
    var { page, item} = r.query;
console.log({page})

    return <div>
        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
            <TopBar backto='/namepageresult'></TopBar>
            {/* <PronounciationCont nametxt={VietName[item].Name}></PronounciationCont> */}
            {(page) && Names.map((o, index) => (
                <PronounciationCont nametxt={page} countryname={page}></PronounciationCont>
            ))}

            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </PageWrap>
    </div>
}


