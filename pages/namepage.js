import FlagCont from '../comps/countriescont'
// import Link from 'next/link'
import Header from '../comps/Header'
import styles from '../styles/Home.module.css'
import SearchBar from '../comps/SearchBar'
// import { useRouter } from 'next/router'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';
import { PageWrap } from '../comps/SetComps'
import { Countries } from '../data/countries_data.js'
import NamePageResults from './namepageresult'
import NameCard from '../comps/namecardcont'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { VietName } from '../data/Name_data'


export default function CountriesOptions() {
    return <div>
        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
            <TopBar
                backto="/homescreen" />
            <Header h1='Topics'></Header>
            <div className={styles.gridcontainer}>

            {Countries.map((item) =>
                        <FlagCont text={item.country} img={item.image}>
                        </FlagCont>
                 )}
            </div>
            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </PageWrap>
    </div >
}

