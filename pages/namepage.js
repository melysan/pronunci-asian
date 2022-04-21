import FlagCont from '../comps/countriescont'
import Header from '../comps/heading'
import styles from '../styles/Home.module.css'
// import SearchBar from '../comps/searchbar'

export default function CountriesOptions() {

    return <div>
        <div className={styles.main}>
        <Header txt='Topics'></Header>
        <SearchBar></SearchBar>
        <div className={styles.gridcontainer}>
            <FlagCont></FlagCont>
            <FlagCont img='/Japanese Coco.svg' text='Japanese'></FlagCont>
            <FlagCont img='/Korean Coco.svg' text='Korean'></FlagCont>
            <FlagCont img='/Vietnamese Coco.svg' text='Vietnamese'></FlagCont>
        </div>
    </div>
    </div>
}