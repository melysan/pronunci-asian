// import SearchBar from "../comps/searchbar"
import Header from "../comps/heading"
import NameCard from "../comps/namecardcont"
import styles from '../styles/Home.module.css'

export default function NamePageResults() {
    return <div>
        <div className={styles.main}>
            <Header txt="Vietnamese"></Header>
            <SearchBar></SearchBar>
            <NameCard></NameCard>
        
        </div>
    </div>
}