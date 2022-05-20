import FlagCont from '../comps/countriescont'
// import Link from 'next/link'
import Header from '../comps/Header'
import styles from '../styles/Home.module.css'
// import { useRouter } from 'next/router'
import TopBar from '../comps/TopBar'
import NavBar from '../comps/NavBar';
import { PageWrap } from '../comps/SetComps'
import { Countries } from '../data/countries_data.js'

export default function CountriesOptions() {
    return <div>
        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
            <TopBar
                backto="/homescreen" />
            <Header h1='Name Topics'></Header>
            <div className={styles.gridcontainer}>

                {Countries.map((item, index) =>
                    <div key={index}>
                        <FlagCont text={item.country} img={item.image}>
                        </FlagCont>
                    </div>
                )}
            </div>
            <NavBar namebuttoncolor='#FC5F6C'
                nametextcolor='#FC5F6C'>
            </NavBar>
        </PageWrap>
    </div >
}

