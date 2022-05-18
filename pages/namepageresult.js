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


function NamePageResults() {
    const r = useRouter();
    var { page } = r.query;

    if (page === undefined) {
      page = 0;
    }


    return <div>
          <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <PageWrap>
        <TopBar
        backto="/namepage"/>
            <SearchBar></SearchBar>
            <Header h1='Vietnamese'></Header>

            {VietName.map((item) => (
            <NameCard txtname={item.Name} country_txt={item.Country}
          />
            ))}

        <NavBar namebuttoncolor='#FC5F6C'
          nametextcolor='#FC5F6C'>
            </NavBar>
            </PageWrap>
    </div>
}

export default NamePageResults;