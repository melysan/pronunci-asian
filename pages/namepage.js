import FlagCont from '../comps/countriescont'
import Header from '../comps/Header'
import styles from '../styles/Home.module.css'
import SearchBar from '../comps/SearchBar'
import { useRouter } from 'next/router'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';
import { PageWrap } from '../comps/SetComps'

export default function CountriesOptions() {

    const r = useRouter();

    return <div>
                <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
        <TopBar
        backto="/homescreen"/>
            <SearchBar></SearchBar>
            <Header h1='Topics'></Header>
            <div className={styles.gridcontainer}>
                <FlagCont></FlagCont>
                <FlagCont img='/Japanese Coco.svg' text='Japanese'></FlagCont>
                <FlagCont img='/Korean Coco.svg' text='Korean'></FlagCont>
                <FlagCont img='/Vietnamese Coco.svg' text='Vietnamese'></FlagCont>
            </div>
            <NavBar namebuttoncolor='#FC5F6C'
          nametextcolor='#FC5F6C'>
            </NavBar>
        </PageWrap>
    </div>
}

