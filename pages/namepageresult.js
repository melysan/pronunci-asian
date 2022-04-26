// import SearchBar from "../comps/searchbar"
import Header from "../comps/heading"
import NameCard from "../comps/namecardcont"
import styles from '../styles/Home.module.css'
import SearchBar from '../comps/SearchBar'
import TopBar from '../comps/TopBar'
import { useRouter } from 'next/router'
import NavBar from '../comps/NavBar';
import { PageWrap } from "../comps/SetComps"


export default function NamePageResults() {
    const r = useRouter();
    return <div>
  
        <PageWrap>
        <TopBar
        backto="/namepage"/>
            <Header txt="Vietnamese"></Header>
            <SearchBar></SearchBar>
            <NameCard></NameCard>
        <NavBar namebuttoncolor='#FC5F6C'
          nametextcolor='#FC5F6C'>
            </NavBar>
            </PageWrap>
    </div>
}