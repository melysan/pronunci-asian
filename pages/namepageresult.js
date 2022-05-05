// import SearchBar from "../comps/searchbar"
import Header from "../comps/Header"
import NameCard from "../comps/namecardcont"
import styles from '../styles/Home.module.css'
import SearchBar from '../comps/SearchBar'
import TopBar from '../comps/TopBar'
import { useRouter } from 'next/router'
import NavBar from '../comps/NavBar';
import { PageWrap } from "../comps/SetComps"
import VietName from "../data/vietname_data.json"


export default function NamePageResults() {
    const r = useRouter();
    var { qnum } = r.query;

    if (qnum === undefined) {
      qnum = 0;
    }
    return <div>
          <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
        <TopBar
        backto="/namepage"/>
            <SearchBar></SearchBar>
            <Header h1='Vietnamese'></Header>

            <NameCard></NameCard>

        <NavBar namebuttoncolor='#FC5F6C'
          nametextcolor='#FC5F6C'>
            </NavBar>
            </PageWrap>
    </div>
}