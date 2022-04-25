import { Volume } from "../comps/SetComps"
import PronounciationCont from "../comps/pronunicationcont"
import styles from '../styles/Home.module.css'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';
import React, { useState } from 'react';
import PronounciationContSlider from "../comps/contslider";




export default function PronounciationSoundCont () {
    
    return <div>
        <div className={styles.main}>
            <TopBar backto="/namepageresult"></TopBar>

            <PronounciationContSlider></PronounciationContSlider>
            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </div>
    </div>
}
