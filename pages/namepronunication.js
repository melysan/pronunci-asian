import PronounciationCont from "../comps/pronunicationcont"
import styles from '../styles/Home.module.css'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';



export default function PronunciationPage() {
    return <div>
        <TopBar></TopBar>
        <div className={styles.main}>
            <PronounciationCont></PronounciationCont>
        </div>
        <NavBar namebuttoncolor='#FC5F6C'
            nametextcolor='#FC5F6C'>
        </NavBar>
    </div>
}