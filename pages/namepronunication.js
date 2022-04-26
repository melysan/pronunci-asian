import PronounciationCont from "../comps/pronunicationcont"
import styles from '../styles/Home.module.css'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';
import React, { useState } from 'react';
import { PageWrap } from "../comps/SetComps";




export default function PronunciationPage() {

    
    return <div>
                <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
            <TopBar backto="/namepageresult"></TopBar>

            <PronounciationCont></PronounciationCont>
            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </PageWrap>
    </div>
}


