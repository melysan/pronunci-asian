import FlagCont from '../comps/countriescont'
import Header from '../comps/heading'
import styles from '../styles/Home.module.css'
import SearchBar from '../comps/SearchBar'
import { useRouter } from 'next/router'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';


export default function CountriesOptions() {

    const r = useRouter();

    return <div>
        <div className={styles.main}>
        <TopBar
        backto="/homescreen"/>
            <Header txt='Topics'></Header>
            <SearchBar></SearchBar>
            <div className={styles.gridcontainer}>
                <FlagCont></FlagCont>
                <FlagCont img='/Japanese Coco.svg' text='Japanese'></FlagCont>
                <FlagCont img='/Korean Coco.svg' text='Korean'></FlagCont>
                <FlagCont img='/Vietnamese Coco.svg' text='Vietnamese'></FlagCont>
            </div>
            <NavBar namebuttoncolor='#FC5F6C'
          nametextcolor='#FC5F6C'>
            </NavBar>
        </div>
    </div>
}

