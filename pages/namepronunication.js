import PronounciationCont from "../comps/pronunicationcont"
import styles from '../styles/Home.module.css'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';
import React, { useState } from 'react';




export default function PronunciationPage() {

    
    return <div>
        <div className={styles.main}>
            <TopBar backto="/namepageresult"></TopBar>

            <PronounciationCont></PronounciationCont>
            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </div>
    </div>
}


